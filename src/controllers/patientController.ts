// This controller handles the patient resource modification logic,
//request to the countroller is passed via routes
import { CodeableConcept } from "../fhir/4.0.1/elements/codeableConcept";
import { Meta } from "../fhir/4.0.1/elements/meta";
import { Narrative } from "../fhir/4.0.1/elements/narrative";
import { OperationOutcomeIssue } from "../fhir/4.0.1/elements/operationOutcomeIssue";
import { OperationOutcome } from "../fhir/4.0.1/resources/operationOutcome";
import { Patient } from "../fhir/4.0.1/resources/patient";
const patientModel = require("../db/models/patientModel");

const createNewResource = async (content, version: number) => {
  // Remove any versionID or lastUpdated content from the Meta
  if (content.meta) {
    delete content.meta.lastUpdated;
    delete content.meta.versionId;
  }
  // This will create the patient class and populate child elements
  const patient = new Patient(content);

  // TODO: Generate a narrative element
  const newResource = await patientModel.newPatientResource(patient, version);
  if (newResource.status === "success") {
    let resource = newResource.resource.resource;
    // attach uuid as the ID of the returned object, this hides the real ID of the database
    resource.id = newResource.resource.uuid;

    const newPaitentObject = new Patient(resource);
    // Set the resource type to patient
    newPaitentObject.resourceType = "Patient";
    // Check if the request has some meta infromation saved, if not create new meta element
    if (!newPaitentObject.meta) {
      // Generate the meta element
      const meta = new Meta();
      // Set generated meta object as the resource meta
      meta.lastUpdated = newResource.resource.lastUpdatedAt;
      meta.versionId = newResource.resource.version;
      newPaitentObject.meta = meta;
    } else {
      newPaitentObject.meta.lastUpdated = newResource.resource.lastUpdatedAt;
      newPaitentObject.meta.versionId = newResource.resource.version;
      newPaitentObject.meta = newPaitentObject.meta;
    }

    // Return the result
    return {
      status: 200,
      response: newPaitentObject.toJSON(),
      object: newPaitentObject,
    };
  } else {
    // If there is an error return a operation outcome resource as an error
    const operationOutcome = new OperationOutcome();
    const issue = new OperationOutcomeIssue();
    const details = new CodeableConcept();
    details.text = newResource.message;
    issue.severity = "error";
    issue.code = "unknown";
    issue.details = details;
    operationOutcome.issue = [issue];
    return {
      status: 500,
      response: operationOutcome.toJSON(),
    };
  }
};

const readResourceById = async (id: string) => {
  // Request the patient data from the patient model
  const patientData = await patientModel.getPatientByUuid(id);

  // IF model return success status send the patient resource
  if (patientData.status === "success") {
    let resource = patientData.resource.resource;
    // Replace patient ID with the UUID
    resource.id = patientData.resource.uuid;
    //  Create a new patient object
    const newPaitentObject = new Patient(resource);
    // Set resource type
    newPaitentObject.resourceType = "Patient";

    // If no meta element is found create a new meta element
    // Set the version ID and lastupdated time
    if (!newPaitentObject.meta) {
      const meta = new Meta();
      meta.lastUpdated = patientData.resource.lastUpdatedAt;
      meta.versionId = patientData.resource.version;
      newPaitentObject.meta = meta;
    } else {
      newPaitentObject.meta.lastUpdated = patientData.resource.lastUpdatedAt;
      newPaitentObject.meta.versionId = patientData.resource.version;
      newPaitentObject.meta = newPaitentObject.meta;
    }
    // Return the patient resouce
    return {
      status: 200,
      response: newPaitentObject.toJSON(),
      object: newPaitentObject,
    };
  } else if (patientData.status === "not-found") {
    // When patient is not found return an operation outcome
    const operationOutcome = new OperationOutcome();
    const issue = new OperationOutcomeIssue();
    const details = new CodeableConcept();
    issue.severity = "error";
    issue.code = "not-found";
    details.text = "The resource you are looking for is not found";
    issue.details = details;
    operationOutcome.issue = [issue];
    return {
      status: 404,
      response: operationOutcome.toJSON(),
      object: operationOutcome,
    };
  } else {
    // If there is an error return a operation outcome resource as an error
    const operationOutcome = new OperationOutcome();
    const issue = new OperationOutcomeIssue();
    const details = new CodeableConcept();

    issue.severity = "error";
    issue.code = "invalid";
    details.text = "Unknown error occured";
    issue.details = details;
    operationOutcome.issue = [issue];
    return {
      status: 500,
      response: operationOutcome.toJSON(),
      object: operationOutcome,
    };
  }
};

const updateResource = async (content) => {
  // If meta version and lastupdated exisits, remove them
  if (content.meta) {
    delete content.meta.lastUpdated;
    delete content.meta.versionId;
  }
  // Set id and remove the id from content
  const id = content.id;
  delete content.id;
  // Check if a previous record exists
  const getPatient = await readResourceById(id);

  if (getPatient.status === 200) {
    // One up the current version
    let version = parseInt(getPatient.object.meta.versionId) + 1;
    // Create a new patient object
    const patient = new Patient(content);
    // Update the patient resource
    const newResource = await patientModel.updatePatientResource(
      patient,
      version,
      id
    );
    // If patient record is updated return the newly created patient resource (updated)
    if (newResource.status === "success") {
      let resource = newResource.resource.resource;
      resource.id = id;
      const newPaitentObject = new Patient(resource);
      // If no meta element exisits, then insert new version ID and last updated time by creating a new meta element
      if (!newPaitentObject.meta) {
        let meta = new Meta();
        meta.versionId = version.toString();
        meta.lastUpdated = newResource.resouce.lastUpdatedAt;
        newPaitentObject.meta = meta;
      } else {
        // Else insert the new version and lastupdated time to the exisiting meta element
        newPaitentObject.meta.versionId = version.toString();
        newPaitentObject.meta.lastUpdated = newResource.resource.lastUpdatedAt;
        newPaitentObject.meta = newPaitentObject.meta;
      }
      // Return the newly created (updated) resource
      return {
        status: 200,
        response: newPaitentObject.toJSON(),
        object: newPaitentObject,
      };
    } else {
      // If there is an error return a operation outcome resource as an error
      const operationOutcome = new OperationOutcome();
      const issue = new OperationOutcomeIssue();
      const details = new CodeableConcept();

      issue.severity = "error";
      issue.code = "invalid";
      details.text = newResource.message;
      issue.details = details;
      operationOutcome.issue = [issue];
      return {
        status: 500,
        response: operationOutcome.toJSON(),
      };
    }
  } else {
    // If patient not found or any other error returned by the model, return the error
    return getPatient;
  }
};

exports.createNewResource = createNewResource;
exports.readResourceById = readResourceById;
exports.updateResource = updateResource;
