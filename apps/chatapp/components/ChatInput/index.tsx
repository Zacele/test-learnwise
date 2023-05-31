'use client';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type Inputs = {
  chatMessage: string;
};

const ChatInput = () => {
  const { register, handleSubmit, watch, reset } = useForm<Inputs>();
  const [latestChatMessage, setLatestChatMessage] = React.useState<string>('');

  const queryClient = useQueryClient();
  const { mutate: submitChat, isLoading } = useMutation({
    mutationFn: async () => {
      return await fetch('/api/chat', {
        method: 'POST',
        body: JSON.stringify({ message: latestChatMessage }),
      }).then((data) => data.json());
    },
    onMutate: async () => {
      await queryClient.cancelQueries(['chatData']);
      queryClient.setQueryData(['chatData'], (oldChat: any) => {
        return {
          data: {
            ...oldChat.data,
            conversation: [
              ...oldChat.data.conversation,
              {
                id: Math.random(),
                message: latestChatMessage,
                sender: 'User',
              },
              {
                id: Math.random(),
                state: 'pending',
                message: '',
                sender: 'AI',
              },
            ],
          },
        };
      });
      reset();
    },
    onSuccess: async (data) => {
      await queryClient.cancelQueries(['chatData']);
      queryClient.setQueryData(['chatData'], (oldChat: any) => {
        oldChat.data.conversation.pop();
        return {
          data: {
            ...oldChat.data,
            conversation: [...oldChat.data.conversation, data.data],
          },
        };
      });
    },
  });

  const onSubmit: SubmitHandler<Inputs> = () => {
    setLatestChatMessage(watch('chatMessage'));
    submitChat();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full px-4 pt-4 mb-2 border-t-2 border-gray-200 sm:mb-0">
        <div className="relative flex">
          <input
            type="text"
            placeholder="Write your message!"
            className="w-full py-3 pl-4 text-gray-600 placeholder-gray-600 bg-gray-200 rounded-md focus:outline-none focus:placeholder-gray-400"
            {...register('chatMessage')}
          />
          <div className="absolute inset-y-0 right-0 items-center hidden sm:flex">
            <button
              type="button"
              className="inline-flex items-center justify-center px-4 py-3 text-white transition duration-500 ease-in-out bg-transparent rounded-lg hover:bg-neutral-500 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 ml-2 transform rotate-45 border-zinc-600"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ChatInput;
