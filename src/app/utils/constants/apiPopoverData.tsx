import { Chip } from "@nextui-org/react";

export const rows = [
  {
    key: "1",
    attribute: "devault_value?:",
    type: <Chip>string | number | boolean</Chip>,
  },
  {
    key: "2",
    attribute: "value?:",
    type: <Chip>string | number | boolean</Chip>,
  },
  {
    key: "3",
    attribute: "validation?:",
    type: <Chip>string (regex)</Chip>,
  },
  {
    key: "4",
    attribute: "min_value?:",
    type: <Chip>number</Chip>,
  },
  {
    key: "5",
    attribute: "max_value?:",
    type: <Chip>number</Chip>,
  },
  {
    key: "6",
    attribute: "options?:",
    type: <Chip>string[] | number[]</Chip>,
  },
  {
    key: "7",
    attribute: "type:",
    type: <Chip>“text” | “longtext” | “dropdown” | “number”</Chip>,
  },
];

export const columns = [
  {
    key: "attribute",
    label: "Attribute",
  },
  {
    key: "type",
    label: "Type",
  },
];
