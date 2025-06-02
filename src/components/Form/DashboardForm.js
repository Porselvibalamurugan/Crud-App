"use client";
import { CreatePost } from "../../lib/data";
import styles from "./form.module.css";
export function DashboardForm() {
  return (
    
      <form action={CreatePost} className={styles.container}>
        <input type="text" name="title" placeholder="title"></input>
        <input type="text" name="description" placeholder="description"></input>
        <input type="text" name="url" placeholder="url"></input>
        <button type="submit" className={styles.subcontainer}>submit</button>
      </form>
  );
}
