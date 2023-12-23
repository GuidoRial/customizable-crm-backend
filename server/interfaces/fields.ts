import { IOption } from "./shared";

/**
 * Represents the possible field types for an entity.
 * @typedef {'text' | 'select' | 'textarea' | 'date' | 'number' | 'radio' | 'reference'} FieldTypes
 */
export type FieldTypes =
  | "text"
  | "select"
  | "textarea"
  | "date"
  | "number"
  | "radio"
  | "reference";

export type IEntityField = {
  _id: string;
  label: string;
  key: string;
  type: FieldTypes;
  required: boolean;
  blueprint: string;
  options?: IOption[];
};

const fields: IEntityField = {
  label: "Name",
  key: "name",
  type: "text",
  required: true,
  blueprint: "",
  _id: ""
};

const optionFields: IEntityField = {
  label: "Name",
  key: "name",
  type: "text",
  required: true,
  blueprint: "",
  options: [
    {
      label: "Option 1",
      value: "option1",
    },
    {
      label: "Option 2",
      value: "option2",
    },
  ],
  _id: ""
};
