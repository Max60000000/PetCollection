import { config } from "dotenv";
config();

export let port = process.env.PORT;
export let dbUrl = process.env.DB_URL;
export let emailHost = process.env.EMAIL_HOST;
export let emailPassword = process.env.EMAIL_PASSWORD;
export let email = process.env.EMAIL_USER;
export let secretKey = process.env.SECRET_KEY;
