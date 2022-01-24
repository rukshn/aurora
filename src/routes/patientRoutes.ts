import { CodeableConcept } from "../fhir/4.0.1/elements/codeableConcept";
import { OperationOutcomeIssue } from "../fhir/4.0.1/elements/operationOutcomeIssue";
import { OperationOutcome } from "../fhir/4.0.1/resources/operationOutcome";

const express = require("express");
const router = express.Router();
const resourceValidator = require("../validators/resourceValidator");
const requestValidator = require("../validators/requestValidator");
const patientController = require("../controllers/patientController");

// error function to return an operation outcome message on failure
const error = (message) => {
  const operationOutcome = new OperationOutcome();
  const issue = new OperationOutcomeIssue();
  const concept = new CodeableConcept();
  issue.code = "invalid";
  issue.severity = "error";
  concept.text = message;
  issue.details = concept;
  operationOutcome.issue = [issue];
  return operationOutcome.toJSON();
};

//Validate POST and PUT requests for resource type
router.post("/", (req, res, next) => {
  // Check if the request header is 'application/json'
  let checkRequestHeader = requestValidator.validateRequestHeader(req);
  // Check if the accept header is 'application/json' or 'application/fhir+json'
  let checkAcceptHeader = requestValidator.validateAcceptHeader(req);
  // Check if resource type is Patient
  let checkResourceType = resourceValidator.checkResourceType(
    req.body.resourceType,
    "Patient"
  );
  let message;

  // If the above criterias are met then proceed to next() or return the error
  if (
    checkRequestHeader.status &&
    checkAcceptHeader.status &&
    checkResourceType.status
  ) {
    next();
  } else if (!checkRequestHeader.status) {
    message = `Header mismatch - The content-type is not the required content-type application/json.`;
    return res.status(500).json(error(message));
  } else if (!checkAcceptHeader.status) {
    message = `Header mismatch - The accept header is not the required accept header application/fhir+json`;
    return res.status(500).json(error(message));
  } else if (!checkResourceType.status) {
    message = `Type mismatch - The resource type in the request is ${req.body.contentType}. The required resource type is Patient`;
    return res.status(500).json(error(message));
  }
});

router.put("/:id", (req, res, next) => {
  // Check if the ID in the URL matches the ID in the request
  let idMatch;
  if (req.params.id === req.body.id) {
    idMatch = true;
  } else {
    idMatch = false;
  }
  // Check if resource type is Patient
  let checkResourceType = resourceValidator.checkResourceType(
    req.body.resourceType,
    "Patient"
  );
  // Check if request header is 'application/json'
  let checkRequestHeader = requestValidator.validateRequestHeader(req);
  // Check if the accpet header is 'application/json' or 'application/fhir+json'
  let checkAccepctHeader = requestValidator.validateAcceptHeader(req);
  // Define error message
  let message;
  // If above crieterias are met proceed to next() or return the error
  if (
    checkResourceType &&
    checkRequestHeader &&
    checkAccepctHeader &&
    req.body.id &&
    idMatch
  ) {
    next();
  } else if (!checkResourceType) {
    message = `Type mismatch - The resource type in the request is ${req.body.contentType}. The required resource type is Patient`;
    return res.status(500).json(error(message));
  } else if (!checkRequestHeader) {
    message = `Header mismatch - The request header in not the required request header application/json.`;
    return res.status(500).json(error(message));
  } else if (!checkAccepctHeader) {
    message = `Header mismatch - The accept header is not the required accept header application/fhir+json`;
    return res.status(500).json(error(message));
  } else if (!req.body.id) {
    message =
      "No resource ID specified, if you are trying to create a resource, please use POST";
    return res.status(500).json(error(message));
  } else if (!idMatch) {
    message = `The Resource SHALL contain an id element that has an identical value to the [id] in the URL.
    The id in the resource was: '${req.body.id}' and the [id] in the URL was: '${req.id}'`;
    return res.status(500).json(error(message));
  }
});

// Create patient route
// This endpoint POST creates a new patient resource in the database
router.post("/", async (req, res) => {
  const body = req.body;
  let validateResourceId = resourceValidator.validateCreateId(body);

  // If the request contains and ID return a operation outcome since ID cannot obly be present during the editing of an existing resource
  if (!validateResourceId.status) {
    // create a new operationoutcome and populate the content
    const operationOutcome = new OperationOutcome();
    const issue = new OperationOutcomeIssue();
    const concept = new CodeableConcept();

    issue.code = "invalid";
    issue.severity = "error";
    concept.text = validateResourceId.message;
    issue.details = concept;
    operationOutcome.issue = [issue];
    return res.status(500).json(operationOutcome.toJSON());
  } else {
    // Pass the data to the patient controller to create a new resource
    const newResource = await patientController.createNewResource(body, 1);
    // return the data passed from the patient controller this can be an error or a successful resource
    return res.status(newResource.status).json(newResource.response);
  }
});

router.get("/", (req, res) => {
  return res.json("patient endpoint");
});

/**
 * Update a patient resource
 */
router.put("/:id", async (req, res) => {
  // Get the request body
  const body = req.body;
  // Create the updated version of the resource as a new resource
  const newResource = await patientController.updateResource(body);
  // Return the newly created resource
  return res.status(newResource.status).json(newResource.response);
});

/**
 * Read a patient resource specified by the UUID
 */
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const resource = await patientController.readResourceById(id);
  return res.status(resource.status).json(resource.response);
});

/**
 * Read a patient resource specificed by a UUID and versionId as histroy
 */
router.get("/:id/_history/:version", async (req, res) => {
  try {
    const id = req.params.id;
    const versionId = parseInt(req.params.version);
    const resource = await patientController.readResourceByIdAndVersion(
      id,
      versionId
    );
    return res.status(resource.status).json(resource.response);
  } catch (e) {
    console.log(e);

    return res.status(500).json(error(e));
  }
});

// Delete patient route
router.delete("/:id", (req, res) => {});

module.exports = router;
