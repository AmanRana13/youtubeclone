import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN_PATH,
    credentials: true,
  })
);

// for the JSON data come from api
app.use(express.json({ limit: "30kb" }));
// for the URL base data come from api
app.use(express.urlencoded({ extended: true, limit: "30kb" }));
// to store the file in the server
app.use(express.static("public"));

app.use(cookieParser());

export default app;
