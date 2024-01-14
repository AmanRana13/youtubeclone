import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const mogooseInstance = await mongoose.connect(
      `${process.env.MOGODB_URL}/${DB_NAME}`
    );
  } catch (error) {
    console.log("[connectDB Error]", error);
    throw error;
  }
};

export default connectDB;
