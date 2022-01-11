// This validator handles all resouce level validation logic

/**
 * Ths function will check the incoming resourceType in the request against a fixed resource type
 * @param target: string the resource type in the incoming request
 * @param source: string the resoucce type you are comparing against
 * @returns true or false
 */
const resourceType = (target: string, source: string) => {
  if (target === source) {
    return true;
  } else {
    return false;
  }
};
