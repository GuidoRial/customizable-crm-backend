import { IEntityField } from './fields';
import { IOption } from './shared';

export interface IEntityBlueprint {
  name: string;
  description: string;
  user: string;
  metadata: {
    canBeReferenced: boolean;
    map: IOption;
  };
  fields: IEntityField[];
}

const contactEntityBlueprint: IEntityBlueprint = {
  name: 'Contact',
  description: 'A contact is a person or company that is a potential customer.',
  user: '5f9f7b3d9f9a4b1b3c9f9a4c',
  metadata: {
    canBeReferenced: true,
    map: {
      label: 'fullName', // Field Name to be used as label
      value: '_id', // Field Name to be used as value
    },
  },
  fields: [
    {
      label: 'Full Name',
      key: 'fullName',
      type: 'text',
      required: true,
      blueprint: '',
      _id: '',
    },
    {
      label: 'Email',
      key: 'email',
      type: 'text',
      required: true,
      blueprint: '',
      _id: '',
    },
    {
      label: 'Phone',
      key: 'phone',
      type: 'text',
      required: true,
      blueprint: '',
      _id: '',
    },
    {
      label: 'Address',
      key: 'address',
      type: 'text',
      required: true,
      blueprint: '',
      _id: '',
    },
    {
      label: 'City',
      key: 'city',
      type: 'select',
      options: [
        { value: 'Buenos Aires', label: 'Buenos Aires' },
        { value: 'Cordoba', label: 'Cordoba' },
        { value: 'Rosario', label: 'Rosario' },
      ],
      required: true,
      blueprint: '',
      _id: '',
    },
    {
      label: 'Country',
      key: 'country',
      type: 'select',
      options: [
        { value: 'Argentina', label: 'Argentina' },
        { value: 'Chile', label: 'Chile' },
        { value: 'Uruguay', label: 'Uruguay' },
      ],
      required: true,
      blueprint: '',
      _id: '',
    },
    {
      label: 'Zip Code',
      key: 'zipCode',
      type: 'text',
      required: true,
      blueprint: '',
      _id: '',
    },
    {
      label: 'Is Main Contact',
      key: 'isMainContact',
      type: 'radio',
      required: true,
      blueprint: '',
      _id: '',
    },
    {
      label: 'Is Main Address',
      key: 'isMainAddress',
      type: 'radio',
      required: true,
      blueprint: '',
      _id: '',
    },
    {
      label: 'Description',
      key: 'description',
      type: 'textarea',
      required: true,
      blueprint: '',
      _id: '',
    },
    {
      label: 'Date of Birth',
      key: 'dateOfBirth',
      type: 'date',
      required: true,
      blueprint: '',
      _id: '',
    },
    {
      label: 'Age',
      key: 'age',
      type: 'number',
      required: true,
      blueprint: '',
      _id: '',
    },
    {
      label: 'Marital Status',
      key: 'maritalStatus',
      type: 'select',
      options: [
        { value: 'single', label: 'Single' },
        { value: 'married', label: 'Married' },
        { value: 'divorced', label: 'Divorced' },
      ],
      required: true,
      blueprint: '',
      _id: '',
    },
    {
      label: 'Company',
      key: 'company',
      type: 'reference',

      options: [
        { value: '5f9f7b3d9f9a4b1b3c9f9a4c', label: 'Company 1' },
        { value: '5f9f7b3d9f9a4b1b3c9f9a4d', label: 'Company 2' },
        { value: '5f9f7b3d9f9a4b1b3c9f9a4e', label: 'Company 3' },
      ],
      required: true,
      blueprint: '',
      _id: '',
    },
  ],
};
