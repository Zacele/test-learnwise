export const getChatData = async () => {
  return await fetch('http://localhost:3000/api/chat').then((res) =>
    res.json()
  );
};
