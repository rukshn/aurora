import { OperationOutcomeIssue } from "../fhir/4.0.1/elements/operationOutcomeIssue";
import { OperationOutcome } from "../fhir/4.0.1/resources/operationOutcome";

const express = require("express");
const router = express.Router();
const headerValidator = require('../validators/requestValidator')
const resourceValidator = require('../validators/resourceValidator')

//validate request header and resource type
router.use((req, res, next) =>{
    if (headerValidator(req) && resourceValidator(req.body.resouceType, 'Patient')) {
        next ()
    } else if(!headerValidator(req)) {
        const operationOutcome = new OperationOutcome()
        const issue = new OperationOutcomeIssue()
        issue.code = "invalid"
        issue.severity = "error"
        issue.details.text = "The header provided is invalid, the accepted header type is 'application/fhir+json'"
        operationOutcome.issue = [issue]
        return res.status(500).json(operationOutcome.toJSON())
    } else if (!resourceValidator) {
        const operationOutcome = new OperationOutcome()
        const issue = new OperationOutcomeIssue()
        issue.code = "invalid"
        issue.severity = "error"
        issue.details.text = `The provided reource type ${req.body.resourceType} does not match the required resource type Patient`
        operationOutcome.issue = [issue]
        return res.status(500).json(operationOutcome.toJSON())
    }
} )

// Create patient route
router.post('/', (req, res) => {
    
})

// Update patient route
router.put('/:id', (req, res) => {

})

// Read patient route
router.get('/:id', (req, res) => {

})

// Delete patient route
router.delete('/:id', (req, res) => {

})