import mongoose, { Schema } from "mongoose";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
      lowecase: true,
      unique: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    avtar: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      trim: [true, "Password is required field"],
    },
    refreshToken: {
      type: String,
      required: true,
    },
    watchHistory: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "video",
      },
    ],
  },
  { timestramps: true }
);

// to encrypt the password
userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcryptjs.hash(this.password, 10);
  }
  next();
});

// we can make own method in mogoose with schema
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcryptjs.compare(password, this.password);
};

// user to create Access Token
userSchema.methods.generateAccessToken = async function (password) {
  jwt.sign(
    {
      _id: this.id,
      username: this.username,
      fullname: this.fullname,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: ACCESS_TOKEN_EXPIRY }
  );
  return await bcryptjs.compare(password, this.password);
};

// user to Reffress Access Token
userSchema.methods.generateRefreshToken = async function (password) {
  jwt.sign(
    {
      _id: this.id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: REFRESH_TOKEN_EXPIRY }
  );
  return await bcryptjs.compare(password, this.password);
};

export const User = mongoose.model("User", userSchema);
