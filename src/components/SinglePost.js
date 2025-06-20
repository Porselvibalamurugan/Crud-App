"use client";
import { useState } from "react";
import styles from "./post.module.css";
import { DeletePost, UpdatePost } from "../lib/data";
export function SinglePost({ props }) {
  const [Updatebtn, setUpdatebtn] = useState(false);
  const [desc, setDesc] = useState(props.desc);
  // const [title, setTitle] = useState(props.title);
  const title = props.title;
  function handleSubmit() {
    setUpdatebtn((prev) => !prev);
    UpdatePost(title, desc);
  }
  return (
    <li className={styles.container}>
      <div className={styles.txt}>
        <div>{props.title}</div>
        <span>{props.desc}</span>
      </div>

      <div className={styles.btns}>
        {!Updatebtn && (
          <button
            className={styles.btn}
            onClick={(e) => {
              setUpdatebtn(!Updatebtn);
            }}
          >
            Update
          </button>
        )}
        {/* <form action={UpdatePost}>   */}
        {Updatebtn && (
          <form onSubmit={handleSubmit}>
            {/* <input type="hidden" name="title" value={props.title} /> */}
            <input
              className={styles.btn1}
              onChange={(e) => setDesc(e.target.value)}
              type="text"
              name="desc"
              placeholder="description"
              value={desc}
            />
            <button className={styles.btn}>Submit</button>
          </form>
        )}
        <form action={DeletePost}>
          <input type="hidden" name="id" value={props._id} />
          <button type="submit" className={styles.btn2}>
            Delete
          </button>
        </form>
      </div>
      {/* <div>{props.desc}</div>
      <div>{props.img}</div> 
       <div>{props.role}</div> */}
    </li>
  );
}
