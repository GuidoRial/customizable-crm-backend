import { IOption } from './shared';

/**
 * Represents the possible field types for an entity.
 * @typedef {'text' | 'select' | 'textarea' | 'date' | 'number' | 'radio' | 'reference'} FieldTypes
 */
export type FieldTypes = 'text' | 'select' | 'textarea' | 'date' | 'number' | 'radio' | 'reference';

export type IEntityField = {
  label: string;
  key: string;
  type: FieldTypes;
  required: boolean;
  entity: string;
  options?: IOption[];
};

const fields: IEntityField = {
  label: 'Name',
  key: 'name',
  type: 'text',
  required: true,
  entity: '',
};

const optionFields: IEntityField = {
  label: 'Name',
  key: 'name',
  type: 'text',
  required: true,
  entity: '',
  options: [
    {
      label: 'Option 1',
      value: 'option1',
    },
    {
      label: 'Option 2',
      value: 'option2',
    },
  ],
};
