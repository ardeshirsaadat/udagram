import AWS = require("aws-sdk");
import { config } from "./config/config";

// Configure AWS
// Configure AWS
export const s3 = new AWS.S3({
  //signatureVersion: "v4",
  region: config.aws_region,
  params: { Bucket: config.aws_media_bucket },
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY_ID
  }
});

// Generates an AWS signed URL for retrieving objects
export function getGetSignedUrl(key: string): string {
  const signedUrlExpireSeconds = 60 * 5;

  const s3Info = s3.getSignedUrl("getObject", {
    Bucket: config.aws_media_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds,
  });

  console.log('s3 Information')
  console.log(s3Info)

  return s3Info;
}

// Generates an AWS signed URL for uploading objects
export function getPutSignedUrl(key: string): string {
  const signedUrlExpireSeconds = 60 * 5;

  return s3.getSignedUrl("putObject", {
    Bucket: config.aws_media_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds,
  });
}