// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'gpt-4o-mini',
    label: 'GPT 4o mini',
    apiIdentifier: 'gpt-4o-mini',
    description: 'Small model for fast, lightweight tasks',
  },
  {
    id: 'gpt-4o',
    label: 'GPT 4o',
    apiIdentifier: 'gpt-4o',
    description: 'For complex, multi-step tasks',
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'gpt-4o-mini';

export interface Country {
  code: string;
  label: string;
  currency: string;
}

export const DEFAULT_COUNTRY_CODE: string = 'ie';
export const countries: Array<Country> = [
  {
    code: 'ie',
    label: 'Ireland',
    currency: 'EUR'
  },
  {
    code: 'uk',
    label: 'United Kingdom',
    currency: 'GBP'
  },
  {
    code: 'us',
    label: 'United States',
    currency: 'USD'
  },
] as const;

export interface Langauge {
  code: string;
  label: string;
  description: string;
}

export const DEFAULT_LANGUAGE_CODE: string = 'ie';
export const languages: Array<Langauge> = [
  {
    code: 'en',
    label: 'English',
    description: ''
  },
  {
    code: 'ga',
    label: 'Irish',
    description: ''
  },
  {
    code: 'fr',
    label: 'French',
    description: ''
  },
  {
    code: 'es',
    label: 'Spanish',
    description: ''
  },  
  {
    code: 'de',
    label: 'German',
    description: ''
  },
  {
    code: 'it',
    label: 'Italian',
    description: ''
  },   
] as const;