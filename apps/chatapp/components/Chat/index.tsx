'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';

import { getChatData } from '../../utils/apis';
import ChatBubble from '../ChatBubble';

const Chat = () => {
  const { data: chatData, isLoading } = useQuery({
    queryKey: ['chatData'],
    queryFn: getChatData,
    staleTime: Infinity,
  });

  if (isLoading) return <div>Loading chat...</div>;

  return (
    <div
      id="messages"
      className="flex flex-col p-3 space-y-4 overflow-y-auto scrolling-touch scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2"
    >
      {chatData.data.conversation.map((message) => {
        return (
          <ChatBubble
            key={message.id}
            message={message.message}
            isUser={message.sender === 'User'}
            state={message.state}
          />
        );
      })}
    </div>
  );
};

export default Chat;
