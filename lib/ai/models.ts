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

export interface ResponseFormat {
  code: string;
  label: string;
  description: string;
}

export const DEFAULT_RESPONSE_FORMAT_CODE: string = 'default';

export const responseFormats: Array<ResponseFormat> = [
  {
    code: 'default',
    label: 'Default',
    description: 'Standard human-readable response.',
  },
  {
    code: 'json',
    label: 'JSON',
    description: 'Structured data in JSON format.',
  },
  {
    code: 'csv',
    label: 'CSV',
    description: 'Tabular data in CSV format.',
  },
  {
    code: 'python',
    label: 'Python',
    description: 'Python script or data snippet.',
  },
  {
    code: 'image',
    label: 'Image',
    description: 'Graphical or visual response.',
  },
] as const;

export interface ConversationMode {
  code: string;
  label: string;
  description: string;
}

export const DEFAULT_CONVERSATION_MODE: string = 'guided';

export const conversationModes: Array<ConversationMode> = [
  {
    code: 'beginner',
    label: 'Beginner Mode',
    description: 'Simplified responses with minimal questions, ideal for exploring options easily.',
  },
  {
    code: 'guided',
    label: 'Guided Mode',
    description: 'Balanced interaction with questions to understand your needs and offer tailored suggestions.',
  },
  {
    code: 'expert',
    label: 'Expert Mode',
    description: 'In-depth and technical responses with advanced customization options.',
  },
] as const;
