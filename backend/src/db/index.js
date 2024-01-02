import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const mogooseInstance = await mongoose.connect(
      `${process.env.MOGODB_URL}/${DB_NAME}`
    );
    console.log("mogooseInstance", mogooseInstance);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
