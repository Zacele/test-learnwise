import { NextResponse } from 'next/server';
import { delay } from 'utils';

import answerData from '../../../data/answerData.json';
import chatData from '../../../data/chatData.json';

export async function GET() {
  return new Response(JSON.stringify(chatData), {
    headers: { 'content-type': 'application/json' },
  });
}

export async function POST(request: Request) {
  await delay(3000);
  return NextResponse.json({
    data: answerData.data.jokes[Math.floor(Math.random() * 4)],
  });
}
