// crud operation in two ways
// server action ,api
"use server";
import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { ConnectToDb } from "./utils";
export const getPosts = async () => {
  try {
    await ConnectToDb();
    const tempPosts = await Post.find();
    const posts = tempPosts.map((item) => ({
      _id: item._id.toString(),
      title: item.title,
      desc: item.desc,
      img: item.img,
      role: item.role,
    }));
    return posts;
  } catch (err) {
    console.log("error", err);
    return null;
  }
};
export async function CreatePost(formData) {
  const { title, description, url } = Object.fromEntries(formData);
  console.log(title, description, url);
  try {
    await ConnectToDb();
    await Post.create({
      title: title,
      desc: description,
      img: url,
      role: "user",
    });
    console.log("Post created successfully");
    revalidatePath("/dashboard");
  } catch (error) {
    console.log("can't add post", error);
  }
  // return
}

export async function DeletePost(formData) {
  const { id } = Object.fromEntries(formData);
  try {
    await Post.findByIdAndDelete(id);
    revalidatePath("/dashboard");
  } catch (error) {
    console.log("Can't delete", error);
  }
}
/* form data contains the data of the input fields in the form*/
export async function UpdatePost(formData) {
  const { title, desc } = Object.fromEntries(formData);
  // console.log(title,desc);
  try {
    await Post.updateOne({ title }, { $set: { desc } });
    console.log("Updated successfully");
    revalidatePath("/dashboard");
  } catch (error) {
    console.log("Can't update", error);
  }
}
