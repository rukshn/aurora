import { PrismaClient } from "@prisma/client";
import { Patient } from "../../fhir/4.0.1/resources/patient";

const prisma = new PrismaClient();

const newPatient = async (patient: Patient) => {
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

exports.newPatient = newPatient;
