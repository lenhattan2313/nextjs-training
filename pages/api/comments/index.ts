import { NextApiRequest, NextApiResponse } from "next";
import commentsData from "../../../data/comments.json";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;
  const comments = commentsData.comments;
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    const newComment = {
      id: Date.now(),
      description: data,
    };
    comments.push(newComment);
    res.status(201).json(newComment);
  } else if (req.method === "DELETE") {
    const deleteItemId = comments.findIndex((c) => c.id === parseInt(data));
    const deleteItem = comments[deleteItemId];
    comments.splice(deleteItemId, 1);
    res.status(200).json(deleteItem);
  }
}
