import Image from 'next/image';

import UserChatBubble from '../components/userChatBubble';

export default async function Home() {
  const initialChat = await fetch('http://localhost:3000/api/chat').then(
    (res) => res.json()
  );

  return (
    <>
      <div className="flex flex-col justify-between flex-1 h-screen p:2 sm:p-6">
        <div className="flex justify-between py-3 border-b-2 border-gray-200 sm:items-center">
          <div className="relative flex items-center space-x-4">
            <div className="relative">
              <span className="absolute bottom-0 right-0 text-green-500">
                <svg width="20" height="20">
                  <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                </svg>
              </span>
              <Image
                src="/images/basketball.jpg"
                alt="basketball"
                className="w-10 h-10 rounded-full sm:w-16 sm:h-16"
                width={144}
                height={144}
              />
            </div>
            <div className="flex flex-col leading-tight">
              <div className="flex items-center mt-1 text-2xl">
                <span className="mr-3 text-gray-700">Jamie</span>
              </div>
              <span className="text-lg text-gray-600">
                Virtual Student Assistant
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 text-gray-500 transition duration-500 ease-in-out border rounded-lg hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 text-gray-500 transition duration-500 ease-in-out border rounded-lg hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 text-gray-500 transition duration-500 ease-in-out border rounded-lg hover:bg-gray-300 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          id="messages"
          className="flex flex-col p-3 space-y-4 overflow-y-auto scrolling-touch scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2"
        >
          {initialChat &&
            initialChat.data.conversation.map((message) => (
              <UserChatBubble
                key={message.id}
                message={message.message}
                isMine={message.sender === 'User'}
              />
            ))}
        </div>
        <div className="px-4 pt-4 mb-2 border-t-2 border-gray-200 sm:mb-0">
          <div className="relative flex">
            <input
              type="text"
              placeholder="Write your message!"
              className="w-full py-3 pl-4 text-gray-600 placeholder-gray-600 bg-gray-200 rounded-md focus:outline-none focus:placeholder-gray-400"
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
      </div>
    </>
  );
}
