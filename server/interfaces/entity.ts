import { IEntityBlueprint } from './blueprint';

/**
 * Represents an entity in the CRM system.
 */
export interface IEntity extends Record<keyof IEntityBlueprint['fields'], unknown> {
  blueprint: string;
}

/**
 * Represents a contact entity.
 */
const contact: IEntity = {
  fullkey: 'John Doe',
  email: 'john@gmail.com',
  phone: '123456789',
  address: 'Some Street 123',
  city: 'Buenos Aires',
  country: 'Argentina',
  zipCode: '1234',
  isMainContact: true,
  isMainAddress: true,
  description: 'Some description',
  dateOfBirth: '1990-01-01',
  age: 30,
  maritalStatus: 'single',
  company: '5f9f7b3d9f9a4b1b3c9f9a4c',
  blueprint: '',
};

/**
 * Represents a company entity.
 */
const company: IEntity = {
  name: 'Company 1',
  email: 'companyemail@gmail.com',
  phone: '123456789',
  address: 'Some Street 123',
  city: 'Buenos Aires',
  country: 'Argentina',
  zipCode: '1234',
  description: 'Some description',
  foundationDate: '1990-01-01',
  numberOfEmployees: 10,
  annualRevenue: 100000,
  isMainAddress: true,
  mainContact: '5f9f7b3d9f9a4b1b3c9f9a4c',
  blueprint: '',
};
