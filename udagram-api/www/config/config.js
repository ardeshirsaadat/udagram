"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.config = {
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
//# sourceMappingURL=config.js.map