// By default Aurora only accept JSON and responds in JSON
// Therefore the Accept header in the request should be 'application/fhir+json'
// The sending content type should be 'application/json'

/**
 * This function checks for the accepts heder value and content type in the incoming request
 * @param header the request header of incoming request
 * @returns true or false
 */
const validateHeader = (header) => {
  if (
    header.accepts("application/fhir+json") &&
    (header.is("application/json") || header.is("application/fhir+json"))
  ) {
    return { status: true, message: "header match" };
  } else {
    return { status: false, message: "header mismatch" };
  }
};

exports.validateHeader = validateHeader;
