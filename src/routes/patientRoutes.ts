import { CodeableConcept } from "../fhir/4.0.1/elements/codeableConcept";
import { Meta } from "../fhir/4.0.1/elements/meta";
import { OperationOutcomeIssue } from "../fhir/4.0.1/elements/operationOutcomeIssue";
import { OperationOutcome } from "../fhir/4.0.1/resources/operationOutcome";
import { Patient } from "../fhir/4.0.1/resources/patient";

const express = require("express");
const router = express.Router();
const headerValidator = require("../validators/requestValidator");
const resourceValidator = require("../validators/resourceValidator");
const patientController = require("../controllers/patientController");

//validate request header and resource type
router.use((req, res, next) => {
  let validateHeader = headerValidator.validateHeader(req);
  // Validates the resource type of the request matches the request type needed "Patient"
  let validateResource = resourceValidator.resourceType(
    req.body.resourceType,
    "Patient"
  );
  // This checks whether the request header matches the headers speficied by the FHIR
  if (validateHeader.status && validateResource.status) {
    next();
  } else if (!validateHeader.status) {
    // If header validation fails returns an operationOutcome

    // Creates the operationOutcome resource and populare the content
    const operationOutcome = new OperationOutcome();
    const issue = new OperationOutcomeIssue();
    issue.code = "invalid";
    issue.severity = "error";
    issue.details.text =
      "The header provided is invalid, the accepted header type is 'application/fhir+json'";
    operationOutcome.issue = [issue];
    // returns the error as a status 500 error
    return res.status(500).json(operationOutcome.toJSON());
  } else if (!validateResource.status) {
    // If request validation fails returns an operationOutcome

    //Creates the OperationOutcome resource and populate the content
    const operationOutcome = new OperationOutcome();
    const issue = new OperationOutcomeIssue();
    const concept = new CodeableConcept();
    issue.code = "invalid";
    issue.severity = "error";
    concept.text = `The provided reource type ${req.body.resourceType} does not match the required resource type Patient`;
    issue.details = concept;
    operationOutcome.issue = [issue];
    // Return the error as a status 500 error
    return res.status(500).json(operationOutcome.toJSON());
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
    const newResource = await patientController.createNewResource(body);
    // return the data passed from the patient controller this can be an error or a successful resource
    return res.status(newResource.status).json(newResource.response);
  }
});

router.get("/", (req, res) => {
  return res.json("patient endpoint");
});

// Update patient route
router.put("/:id", (req, res) => {});

// Read patient route
router.get("/:id", (req, res) => {});

// Delete patient route
router.delete("/:id", (req, res) => {});

module.exports = router;
