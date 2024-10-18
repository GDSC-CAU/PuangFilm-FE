import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  const { headers } = request;

  const body = await request.json();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}:${process.env.NEXT_PUBLIC_SERVER_PORT}/api/photo-request`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    },
  );
  const jsonData = await response.json();
  return NextResponse.json(jsonData, {
    status: jsonData.code,
  });
};
