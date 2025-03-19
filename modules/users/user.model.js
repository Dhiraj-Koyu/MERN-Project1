const { string } = require("joi");
const { Schema, model } = require("mongoose");
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isBlocked: { type: Boolean, required: true, default: true },
    isEmailVerified: { type: Boolean, required: true, default: false },
    opt: { type: String },
    role: { type: [String], enum: ["admin", "user"], default: "user" },
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
