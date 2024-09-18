type Value = string | number | boolean;

export type FormElementType = {
  default_value?: Value;
  value?: Value;
  validation?: string;
  min_value?: number;
  max_value?: number;
  options?: string[] | number[];
  type: "text" | "longtext" | "dropdown" | "number";
};
