"use client";
import { CreatePost } from "../../lib/data";
import styles from "./form.module.css";
export function DashboardForm() {
  return (
    <div className={styles.container}>
      <h1 style={{ textAlign: "center" }}>Create a Post</h1>
      <form action={CreatePost} className={styles.subcontainer}>
        <input type="text" name="title" placeholder="title"></input>
        <input type="text" name="description" placeholder="description"></input>
        <input type="text" name="url" placeholder="url"></input>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
