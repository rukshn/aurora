// This controller handles the patient resource modification logic, 
//request to the countroller is passed via routes

import { Patient } from "../fhir/4.0.1/resources/patient"

const createNewResource = (content) => {
    // This will create the patient class and populate child elements
    const patient = new Patient(content)
    // TODO: save patient in database
    return patient
}
