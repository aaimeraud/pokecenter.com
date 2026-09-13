export const capitalize = (str: string): string =>
  str ? `${String(str).charAt(0).toUpperCase()}${String(str).slice(1)}` : str;

export const titleCase = (str: string): string => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

export const FromKebabCase = (str: string): string => {
  return str.replace("-", " ");
};

export const FromKebabCaseToTitleCase = (str: string): string => {
  return titleCase(FromKebabCase(str));
};
