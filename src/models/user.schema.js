import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false },
    perferred_pronouns:["Mr","Miss","Mrs","Perfer not say"]
  },
  { timestamps: true }
);

export default UserSchema;
