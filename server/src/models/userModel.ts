import mongoose from "mongoose";
interface User {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const userSchema = new mongoose.Schema<User>({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

const User = mongoose.model<User>("User", userSchema);

export default User;
