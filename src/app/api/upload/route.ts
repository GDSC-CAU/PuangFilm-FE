import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

const AWS_S3_ACCESS_ID = process.env.AWS_S3_ACCESS_ID || '';
const AWS_S3_ACCESS_KEY = process.env.AWS_S3_ACCESS_KEY || '';
const AWS_S3_REGION = process.env.AWS_S3_REGION || '';
const AWS_S3_BUCKET = process.env.AWS_S3_BUCKET || '';

const client = new S3Client({
  region: AWS_S3_REGION,
  credentials: {
    accessKeyId: AWS_S3_ACCESS_ID,
    secretAccessKey: AWS_S3_ACCESS_KEY,
  },
});

// 이미지를 S3에 업로드하는 함수
export const POST = async (request: NextRequest) => {
  const formData = await request.formData();
  const files = formData.getAll('files') as File[];

  const uploadPromises = files.map(async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const key = `${uuidv4()}/${file.name}`;

    const command = new PutObjectCommand({
      Bucket: AWS_S3_BUCKET,
      Key: key,
      Body: buffer,
      ContentType: file.type,
    });

    try {
      const response = await client.send(command);
      return response.$metadata.httpStatusCode === 200
        ? `https://${AWS_S3_BUCKET}.s3.${AWS_S3_REGION}.amazonaws.com/${key}`
        : '';
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  });

  try {
    const urls = await Promise.all(uploadPromises);
    return NextResponse.json({ urls }, { status: 200 });
  } catch (error: unknown) {
    console.error('Failed upload images: ', error);
    return NextResponse.json(
      { message: 'Failed to upload images' },
      { status: 500 },
    );
  }
};
