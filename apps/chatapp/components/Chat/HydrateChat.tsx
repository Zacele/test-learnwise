import { dehydrate, Hydrate } from '@tanstack/react-query';

import { getChatData } from '../../utils/apis';
import getQueryClient from '../../utils/getQueryClient';

import Chat from '.';

export default async function HydrateChat() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['chatData'], getChatData);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Chat />
    </Hydrate>
  );
}
