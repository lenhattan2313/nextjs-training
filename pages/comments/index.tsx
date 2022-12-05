import React, { useState } from "react";

type Props = {
  comments?: any[];
};
//don't do this just get data from folder data/comments. If we call through getStaticProps or getServerSideProps it will cost us about 200 ms or more
// export const getStaticProps = async () => {
//   const response = await fetch("http://localhost:3000/api/comments");
//   const data = await response.json();
//   return {
//     props: data,
//   };
// };
const CommentPage = (props: Props) => {
  const [comments, setComments] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleLoadComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };
  const addComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify(inputValue),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = response.json();
    console.log({ data });
    setInputValue("");
  };
  const handleDelete = async (commentId: number) => {
    const response = await fetch("/api/comments", {
      method: "DELETE",
      body: commentId.toString(),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log({ data });
    handleLoadComments();
  };
  return (
    <div>
      <h1>CommentPage</h1>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addComment}>Add comment</button>
      <button onClick={handleLoadComments}>Load comments</button>
      {comments.map((comment: any) => (
        <div key={comment.id}>
          {comment.description}{" "}
          <button onClick={() => handleDelete(comment.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default CommentPage;
