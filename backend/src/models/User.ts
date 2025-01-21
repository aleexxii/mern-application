import mongoose, { Schema } from "mongoose";

export enum Role {
    USER = 'user',
    ADMIN = 'admin'
}

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  profilePic: string;
  role: "user" | "admin";
}

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default:
        "https://th.bing.com/th/id/OIP.SAcV4rjQCseubnk32USHigHaHx?rs=1&pid=ImgDetMain",
    },
    role: {
      type: String,
      enum: Object.values(Role),
      default: "user",
    },
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;
