"use client";
import { useState } from "react";
import { DeletePost, UpdatePost } from "../lib/data";
export function SinglePost({ props }) {
  const [Updatebtn, setUpdatebtn] = useState(false);
  const [desc, setDesc] = useState("");
  function handleSubmit() {
    setUpdatebtn((prev) => !prev);
  }
  return (
    <li
      style={{
        display: "flex",
        padding: "10px",
        gap: "25px",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: "1",
        }}
      >
        {props.desc}
      </div>

      <div
        style={{
          display: "flex",
          flex: "1",
          gap: "20px",
        }}
      >
        {!Updatebtn && (
          <button
            onClick={(e) => {
              setUpdatebtn(!Updatebtn);
            }}
          >
            update
          </button>
        )}
        {/* <form action={UpdatePost}> */}
        {Updatebtn && (
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="title" value={props.title} />
            <input
              onChange={(e) => setDesc(e.target.value)}
              type="text"
              name="desc"
              placeholder="description"
              value={desc}
            ></input>
            <button>submit</button>
          </form>
        )}
        <form action={DeletePost}>
          <input type="hidden" name="id" value={props._id} />
          <button type="submit">Delete</button>
        </form>
      </div>
      {/* <div>{props.desc}</div>
      <div>{props.img}</div> 
       <div>{props.role}</div> */}
    </li>
  );
}
