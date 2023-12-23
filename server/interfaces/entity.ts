interface IOption {
  value: string;
  label: string;
}
/**
 * Represents the possible field types for an entity.
 * @typedef {'text' | 'select' | 'textarea' | 'date' | 'number' | 'radio' | 'reference'} FieldTypes
 */
type FieldTypes =
  | "text"
  | "select"
  | "textarea"
  | "date"
  | "number"
  | "radio"
  | "reference";
/**
 * Represents an input field in a form.
 * Will need to be associated to an entitie's field.
 */
export interface IInput {
  label: string;
  key: string;
  type: FieldTypes;
  required: boolean;
  entity: string; // - Entity ID this is part of
  options?: IOption[];
}

export type IEntityField = {
  label: string;
  key: string;
  type: FieldTypes;
  required: boolean;
  entity: string;
  options?: IOption[];
};

/**
 * Represents the blueprint for an entity.
 */
export interface IEntityBlueprint {
  name: string;
  description: string;
  user: string;
  metadata: {
    canBeReferenced: boolean;
    map: IOption;
  };
  fields: Record<string, IEntityField>;
}

/**
 * Represents an entity in the CRM system.
 */
export interface IEntity
  extends Record<keyof IEntityBlueprint["fields"], unknown> {
  blueprint: string;
}

/**
 * Represents the blueprint for a contact entity.
 * @interface IEntityBlueprint
 */
const contactEntityBlueprint: IEntityBlueprint = {
  name: "Contact",
  description: "A contact is a person or company that is a potential customer.",
  user: "5f9f7b3d9f9a4b1b3c9f9a4c",
  metadata: {
    canBeReferenced: true,
    map: {
      label: "fullName", // Field Name to be used as label
      value: "_id", // Field Name to be used as value
    },
  },
  fields: {
    fullName: {
      label: "Full Name",
      key: "fullName",
      type: "text",
      required: true,

      entity: "",
    },
    email: {
      label: "Email",
      key: "email",
      type: "text",
      required: true,

      entity: "",
    },
    phone: {
      label: "Phone",
      key: "phone",
      type: "text",
      required: true,

      entity: "",
    },
    address: {
      label: "Address",
      key: "address",
      type: "text",
      required: true,

      entity: "",
    },
    city: {
      label: "City",
      key: "city",
      type: "select",
      options: [
        { value: "Buenos Aires", label: "Buenos Aires" },
        { value: "Cordoba", label: "Cordoba" },
        { value: "Rosario", label: "Rosario" },
      ],
      required: true,

      entity: "",
    },
    country: {
      label: "Country",
      key: "country",
      type: "select",
      options: [
        { value: "Argentina", label: "Argentina" },
        { value: "Chile", label: "Chile" },
        { value: "Uruguay", label: "Uruguay" },
      ],
      required: true,

      entity: "",
    },
    zipCode: {
      label: "Zip Code",
      key: "zipCode",
      type: "text",
      required: true,

      entity: "",
    },
    isMainContact: {
      label: "Is Main Contact",
      key: "isMainContact",
      type: "radio",
      required: true,

      entity: "",
    },
    isMainAddress: {
      label: "Is Main Address",
      key: "isMainAddress",
      type: "radio",
      required: true,

      entity: "",
    },
    description: {
      label: "Description",
      key: "description",
      type: "textarea",
      required: true,

      entity: "",
    },
    dateOfBirth: {
      label: "Date of Birth",
      key: "dateOfBirth",
      type: "date",
      required: true,

      entity: "",
    },
    age: {
      label: "Age",
      key: "age",
      type: "number",
      required: true,

      entity: "",
    },
    maritalStatus: {
      label: "Marital Status",
      key: "maritalStatus",
      type: "select",
      options: [
        { value: "single", label: "Single" },
        { value: "married", label: "Married" },
        { value: "divorced", label: "Divorced" },
      ],
      required: true,

      entity: "",
    },
    company: {
      label: "Company",
      key: "company",
      type: "reference",

      options: [
        { value: "5f9f7b3d9f9a4b1b3c9f9a4c", label: "Company 1" },
        { value: "5f9f7b3d9f9a4b1b3c9f9a4d", label: "Company 2" },
        { value: "5f9f7b3d9f9a4b1b3c9f9a4e", label: "Company 3" },
      ],
      required: true,

      entity: "",
    },
  },
};

/**
 * Represents the blueprint for a company entity.
 */
const companyEntityBlueprint: IEntityBlueprint = {
  name: "Company",
  description: "A company is a potential customer.",
  user: "5f9f7b3d9f9a4b1b3c9f9a4c",
  metadata: {
    canBeReferenced: true,
    map: {
      label: "name", // Field Name to be used as label
      value: "_id", // Field Name to be used as value
    },
  },
  fields: {
    name: {
      label: "Name",
      key: "name",
      type: "text",
      required: true,
      entity: "",
    },
    email: {
      label: "Email",
      key: "email",
      type: "text",
      required: true,
      entity: "",
    },
    phone: {
      label: "Phone",
      key: "phone",
      type: "text",
      required: true,
      entity: "",
    },
    address: {
      label: "Address",
      key: "address",
      type: "text",
      required: true,
      entity: "",
    },
    city: {
      label: "City",
      key: "city",
      type: "select",
      options: [
        { value: "Buenos Aires", label: "Buenos Aires" },
        { value: "Cordoba", label: "Cordoba" },
        { value: "Rosario", label: "Rosario" },
      ],
      required: true,

      entity: "",
    },
    country: {
      label: "Country",
      key: "country",
      type: "select",
      options: [
        { value: "Argentina", label: "Argentina" },
        { value: "Chile", label: "Chile" },
        { value: "Uruguay", label: "Uruguay" },
      ],
      required: true,

      entity: "",
    },
    zipCode: {
      label: "Zip Code",
      key: "zipCode",
      type: "text",
      required: true,
      entity: "",
    },
    description: {
      label: "Description",
      key: "description",
      type: "textarea",
      required: true,
      entity: "",
    },
    foundationDate: {
      label: "Foundation Date",
      key: "foundationDate",
      type: "date",
      required: true,
      entity: "",
    },
    numberOfEmployees: {
      label: "Number of Employees",
      key: "numberOfEmployees",
      type: "number",
      required: true,
      entity: "",
    },
    annualRevenue: {
      label: "Annual Revenue",
      key: "annualRevenue",
      type: "number",
      required: true,
      entity: "",
    },
    isMainAddress: {
      label: "Is Main Address",
      key: "isMainAddress",
      type: "radio",
      required: true,
      entity: "",
    },
    mainContact: {
      label: "Main Contact",
      key: "mainContact",
      type: "reference",
      options: [
        { value: "5f9f7b3d9f9a4b1b3c9f9a4c", label: "Contact 1" },
        { value: "5f9f7b3d9f9a4b1b3c9f9a4d", label: "Contact 2" },
        { value: "5f9f7b3d9f9a4b1b3c9f9a4e", label: "Contact 3" },
      ],
      required: true,
      entity: "",
    },
  },
};

/**
 * Represents a contact entity.
 */
const contact: IEntity = {
  fullkey: "John Doe",
  email: "john@gmail.com",
  phone: "123456789",
  address: "Some Street 123",
  city: "Buenos Aires",
  country: "Argentina",
  zipCode: "1234",
  isMainContact: true,
  isMainAddress: true,
  description: "Some description",
  dateOfBirth: "1990-01-01",
  age: 30,
  maritalStatus: "single",
  company: "5f9f7b3d9f9a4b1b3c9f9a4c",
  blueprint: "",
};

/**
 * Represents a company entity.
 */
const company: IEntity = {
  name: "Company 1",
  email: "companyemail@gmail.com",
  phone: "123456789",
  address: "Some Street 123",
  city: "Buenos Aires",
  country: "Argentina",
  zipCode: "1234",
  description: "Some description",
  foundationDate: "1990-01-01",
  numberOfEmployees: 10,
  annualRevenue: 100000,
  isMainAddress: true,
  mainContact: "5f9f7b3d9f9a4b1b3c9f9a4c",
  blueprint: "",
};
