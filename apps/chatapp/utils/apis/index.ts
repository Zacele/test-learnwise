export const getChatData = async () => {
  return await fetch('/api/chat').then((res) => res.json());
};
