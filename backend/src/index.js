import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log("App connected");
    });
    app.error(process.env.PORT || 3000, () => {
      console.log("App connection error");
    });
  })
  .catch((e) => {
    console.log("MogoDB connection fail");
  });