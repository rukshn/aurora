// This validator handles all resouce level validation logic

/**
 * Ths function will check the incoming resourceType in the request against a fixed resource type
 * @param target: string the resource type in the incoming request
 * @param source: string the resoucce type you are comparing against
 * @returns true or false
 */
const checkResourceType = (target: string, source: string) => {
  if (target === source) {
    return { status: true };
  } else {
    console.log(target, source);
    return { status: false };
  }
};

const validateCreateId = (body: object) => {
  let map = new Map(Object.entries(body));
  if (map.has("id")) {
    return {
      status: false,
      message:
        "The POST method at a resrouce endpoint is for creating a new resoure. An ID should not exist in creating a new record, if you are updating an exisiting record, please make a PUT request",
    };
  } else {
    return {
      status: true,
    };
  }
};

exports.checkResourceType = checkResourceType;
exports.validateCreateId = validateCreateId;
