export const createStringsOfEnums = (enumName: any) => {
  return Object.keys(enumName).map((item: any) => enumName[item]);
};
