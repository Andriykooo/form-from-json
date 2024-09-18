export const regexPattern = /^\/.*\/[gimsuy]*$/;

export const isValidRegExpFormat = (regexString: string): boolean => {
  return regexPattern.test(regexString);
};
