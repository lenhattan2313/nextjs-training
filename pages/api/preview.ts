import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setPreviewData({ user: "Tan" });
  // res.end("Preview mode");
  res.redirect(req.query.redirect as string);
}
