import { FormElementType } from "../types/formElement.type";

export const initialFormElements: FormElementType[] = [
  {
    default_value: "Some text...",
    value: "",
    type: "text",
    validation: "/^\\d+$/gi",
  },
  {
    default_value: "",
    value: "Some long text...",
    type: "longtext",
  },
  {
    default_value: "",
    value: 2,
    min_value: 1,
    max_value: 20,
    type: "number",
  },
  {
    default_value: "Option 1",
    value: "",
    options: ["Option 1", "Option 2", "Option 3"],
    type: "dropdown",
  },
];
