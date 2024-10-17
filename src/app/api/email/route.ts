import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const searchCode = searchParams.get('code') || '';
  const body = await request.json();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}:${process.env.NEXT_PUBLIC_SERVER_PORT}/api/photo-request`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${searchCode}`,
      },
      body: JSON.stringify(body),
    },
  );
  const jsonData = await response.json();
  return NextResponse.json(jsonData, {
    status: jsonData.code,
  });
};
