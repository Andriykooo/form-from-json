import { FormElements } from "../types/formElements.type";
import { getFieldName } from "./getFieldName";

export const generateDefaultValues = (
  data: FormElements[]
): Record<string, string> => {
  const defaultValues: Record<string, string> = {};

  data.forEach((element, index) => {
    defaultValues[getFieldName(index)] =
      element?.value?.toString() || element?.default_value?.toString() || "";
  });

  return defaultValues;
};
