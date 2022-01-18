// This controller handles the patient resource modification logic,
//request to the countroller is passed via routes
import { CodeableConcept } from "../fhir/4.0.1/elements/codeableConcept";
import { Meta } from "../fhir/4.0.1/elements/meta";
import { Narrative } from "../fhir/4.0.1/elements/narrative";
import { OperationOutcomeIssue } from "../fhir/4.0.1/elements/operationOutcomeIssue";
import { OperationOutcome } from "../fhir/4.0.1/resources/operationOutcome";
import { Patient } from "../fhir/4.0.1/resources/patient";
const patientModel = require("../db/models/patientModel");

const createNewResource = async (content) => {
  // Remove any versionID or lastUpdated content from the Meta
  if (content.meta) {
    delete content.meta.lastUpdated;
    delete content.meta.versionId;
  }
  // This will create the patient class and populate child elements
  const patient = new Patient(content);

  // TODO: Generate a narrative element
  const newResource = await patientModel.newPatient(patient);
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
    };
  } else {
    // If there is an error return a operation outcome resource as an error
    const operationOutcome = new OperationOutcome();
    const issue = new OperationOutcomeIssue();
    const details = new CodeableConcept();
    details.text = "Unknown error occured";
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

const getResourceById = async (id) => {
  // Request the patient data from the patient model
  const patientData = await patientModel.getPatientByUuid(id);

  // IF model return success status send the patient resouce
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
    };
  } else {
    // If there is an error return a operation outcome resource as an error
    const operationOutcome = new OperationOutcome();
    const issue = new OperationOutcomeIssue();
    const details = new CodeableConcept();

    issue.severity = "error";
    issue.code = "unknown";
    details.text = "Unknown error occured";
    issue.details = details;
    operationOutcome.issue = [issue];
    return {
      status: 500,
      response: operationOutcome.toJSON(),
    };
  }
};

exports.createNewResource = createNewResource;
exports.getResourceById = getResourceById;
