import { PrismaClient } from "@prisma/client";
import { Patient } from "../../fhir/4.0.1/resources/patient";

const prisma = new PrismaClient();

/**
 * This function creates a new patient resource in the database
 * The controller passes a patient object which the model saves in the database
 * @param patient: A Patient resource object
 * @returns newly created patient resource
 */
const newPatientResource = async (patient: Patient) => {
  try {
    // Create a new resouce by using the sent data
    const newResource = await prisma.patient.create({
      data: {
        resource: patient.toJSON(),
        // version is set to 1 because this is the initial creation of the resource
        version: 1,
      },
    });
    // return created resource
    return { status: "success", resource: newResource };
  } catch (error) {
    // Handle prisma erros and return error
    return {
      status: "error",
      message:
        "Prisma Error, somehting related to your database or connection!!",
      details: error,
    };
  }
};

/**
 * This returns the patient resource with the given UUID
 * In Aurora the ID of the database is not exposed, instead proxied through the UUID
 * The lastest record is returned
 * @param uuid The UUID of the patient,
 * @returns the patient resource
 */
const getPatientByUuid = async (uuid: string, version?: number) => {
  try {
    // Get the last record of the patient by the UUID
    const patient = await prisma.patient.findFirst({
      where: {
        uuid: uuid,
        version: version,
      },
      orderBy: {
        id: "desc",
      },
    });
    // If patient exits return patient resource else send a not found response
    if (patient.id) {
      return { status: "success", resource: patient };
    } else {
      return { status: "not-found" };
    }
  } catch (error) {
    // If an error orrcued return the error
    return {
      status: "error",
      message:
        "Prisma Error, somehting related to your database or connection!!",
      details: error,
    };
  }
};

const updatePatientResource = async (
  patient: Patient,
  version: number,
  uuid: string
) => {
  try {
    const newResource = await prisma.patient.create({
      data: {
        resource: patient.toJSON(),
        version: version,
        uuid: uuid,
      },
    });
    return { status: "success", resource: newResource };
  } catch (error) {
    return {
      status: "error",
      message:
        "Prisma Error, somehting related to your database or connection!!",
      details: error,
    };
  }
};

exports.newPatientResource = newPatientResource;
exports.getPatientByUuid = getPatientByUuid;
exports.updatePatientResource = updatePatientResource;
