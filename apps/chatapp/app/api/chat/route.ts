import chatData from '../../../data/chatData.json';

export async function GET(request: Request) {
  return new Response(JSON.stringify(chatData), {
    headers: { 'content-type': 'application/json' },
  });
}
