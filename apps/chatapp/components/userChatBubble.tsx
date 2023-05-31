'use client';

import React from 'react';
import clsx from 'clsx';

const UserChatBubble = ({
  message,
  isMine,
}: {
  message: string;
  isMine?: boolean;
}) => {
  return (
    <div className="chat-message">
      <div
        className={clsx('flex items-end', {
          'justify-end': isMine,
        })}
      >
        <div
          className={clsx(
            'flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-start',
            {
              'items-end': isMine,
              'items-start': !isMine,
            }
          )}
        >
          <div>
            <span
              className={clsx('inline-block px-4 py-2 rounded-lg', {
                'bg-gray-300 text-gray-600 rounded-bl-none': !isMine,
                'bg-blue-600 text-white rounded-br-none': isMine,
              })}
            >
              {message}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserChatBubble;
