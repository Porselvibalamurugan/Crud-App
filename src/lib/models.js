import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  img: { type: String },
  role: { type: String, default: "user" },
});
export const Post = mongoose.models?.Post || mongoose.model("Post",postSchema);
