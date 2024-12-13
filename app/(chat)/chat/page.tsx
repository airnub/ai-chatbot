import { cookies } from 'next/headers';

import { Chat } from '@/components/chat';
import { DEFAULT_COUNTRY_CODE, countries, DEFAULT_LANGUAGE_CODE, languages, DEFAULT_MODEL_NAME, models } from '@/lib/ai/models';
import { generateUUID } from '@/lib/utils';

export default async function Page() {
  const id = generateUUID();

  const cookieStore = await cookies();

  const countryCodeFromCookie = cookieStore.get('country-code')?.value;
  const selectedCountryCode =
    countries.find((country) => country.code === countryCodeFromCookie)?.code ||
    DEFAULT_COUNTRY_CODE;

  const languageCodeFromCookie = cookieStore.get('language-code')?.value;
  const selectedLanguageCode =
    languages.find((language) => language.code === languageCodeFromCookie)?.code ||
    DEFAULT_LANGUAGE_CODE;

  const modelIdFromCookie = cookieStore.get('model-id')?.value;

  const selectedModelId =
    models.find((model) => model.id === modelIdFromCookie)?.id ||
    DEFAULT_MODEL_NAME;

  return (
    <Chat
      key={id}
      id={id}
      initialMessages={[]}
      selectedCountryCode={selectedCountryCode}
      selectedLanguageCode={selectedLanguageCode}
      selectedModelId={selectedModelId}
      selectedVisibilityType="private"
      isReadonly={false}
    />
  );
}
