export const stringToRegExp = (regexString: string): RegExp => {
  const pattern = regexString.slice(1, regexString.lastIndexOf("/"));
  const flags = regexString.slice(regexString.lastIndexOf("/") + 1);
  return new RegExp(pattern, flags);
};
