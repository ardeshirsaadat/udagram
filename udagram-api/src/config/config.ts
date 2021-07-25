import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  username: `${process.env.POSTGRES_USERNAME}`,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  postgres_port: Number(process.env.POSTGRES_PORT),
  port: Number(process.env.PORT),
  host: process.env.POSTGRES_HOST,
  dialect: "postgres",
  aws_access_key: process.env.AWS_ACCESS_KEY,
  aws_profile: process.env.AWS_PROFILE,
  aws_secret: process.env.AWS_SECRET,
  url: process.env.URL,
  aws_media_bucket: process.env.AWS_BUCKET,
  aws_region: process.env.AWS_REGION,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
