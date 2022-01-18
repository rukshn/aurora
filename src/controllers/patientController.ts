// This controller handles the patient resource modification logic,
//request to the countroller is passed via routes
import { Meta } from "../fhir/4.0.1/elements/meta";
import { Narrative } from "../fhir/4.0.1/elements/narrative";
import { OperationOutcomeIssue } from "../fhir/4.0.1/elements/operationOutcomeIssue";
import { OperationOutcome } from "../fhir/4.0.1/resources/operationOutcome";
import { Patient } from "../fhir/4.0.1/resources/patient";
const patientModel = require("../db/models/patientModel");

const createNewResource = async (content) => {
  // This will create the patient class and populate child elements
  const patient = new Patient(content);

  // TODO: Generate a narrative element
  const newResource = await patientModel.newPatient(patient);
  if (newResource.status === "success") {
    let resource = newResource.resource.resource;
    // attach uuid as the ID of the returned object, this hides the real ID of the database
    resource.id = newResource.resource.uuid;

    const newPaitentObject = new Patient(resource);
    // Generate the meta element
    const meta = new Meta();
    meta.lastUpdated = newResource.resource.lastUpdatedAt;
    meta.versionId = newResource.resource.version;
    // Set generated meta object as the resource meta
    newPaitentObject.meta = meta;
    // Return the result
    return {
      status: 200,
      response: newPaitentObject.toJSON(),
    };
  } else {
    // If there is an error return a operation outcome resource as an error
    const operationOutcome = new OperationOutcome();
    const issue = new OperationOutcomeIssue();
    issue.severity = "error";
    issue.code = "unknown";
    issue.details.text = "Unknown error occured";
    operationOutcome.issue = [issue];
    return {
      status: 500,
      response: operationOutcome.toJSON(),
    };
  }
};

exports.createNewResource = createNewResource;
