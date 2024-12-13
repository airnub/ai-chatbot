import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

import { auth } from '@/app/(auth)/auth';
import { Chat } from '@/components/chat';
import { DEFAULT_COUNTRY_CODE, countries, DEFAULT_LANGUAGE_CODE, languages, DEFAULT_MODEL_NAME, models, responseFormats, DEFAULT_RESPONSE_FORMAT_CODE, conversationModes, DEFAULT_CONVERSATION_MODE } from '@/lib/ai/models';
import { getChatById, getMessagesByChatId } from '@/lib/db/queries';
import { convertToUIMessages } from '@/lib/utils';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const { id } = params;
  const chat = await getChatById({ id });

  if (!chat) {
    notFound();
  }

  const session = await auth();

  if (chat.visibility === 'private') {
    if (!session || !session.user) {
      return notFound();
    }

    if (session.user.id !== chat.userId) {
      return notFound();
    }
  }

  const messagesFromDb = await getMessagesByChatId({
    id,
  });

  const cookieStore = await cookies();

  const countryCodeFromCookie = cookieStore.get('choosr.country-code')?.value;
  const selectedCountryCode =
    countries.find((country) => country.code === countryCodeFromCookie)?.code ||
    DEFAULT_COUNTRY_CODE;

  const languageCodeFromCookie = cookieStore.get('choosr.language-code')?.value;
  const selectedLanguageCode =
    languages.find((language) => language.code === languageCodeFromCookie)?.code ||
    DEFAULT_LANGUAGE_CODE;

  const responseFormatFromCookie = cookieStore.get('choosr.response-format')?.value;
  const selectedResponseFormat =
    responseFormats.find((responseFormat) => responseFormat.code === responseFormatFromCookie)?.code ||
    DEFAULT_RESPONSE_FORMAT_CODE;

    const conversationModeFromCookie = cookieStore.get('choosr.conversation-mode')?.value;
    const selectedConversationMode =
      conversationModes.find((conversationMode) => conversationMode.code === conversationModeFromCookie)?.code ||
      DEFAULT_CONVERSATION_MODE;

  const modelIdFromCookie = cookieStore.get('choosr.model-id')?.value;
  const selectedModelId =
    models.find((model) => model.id === modelIdFromCookie)?.id ||
    DEFAULT_MODEL_NAME;

  return (
    <Chat
      id={chat.id}
      initialMessages={convertToUIMessages(messagesFromDb)}
      selectedCountryCode={selectedCountryCode}
      selectedLanguageCode={selectedLanguageCode}
      selectedResponseFormat={selectedResponseFormat}
      selectedConversationMode={selectedConversationMode}
      selectedModelId={selectedModelId}
      selectedVisibilityType={chat.visibility}
      isReadonly={session?.user?.id !== chat.userId}
    />
  );
}
