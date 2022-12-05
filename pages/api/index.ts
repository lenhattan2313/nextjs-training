import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ data: "test" });
}
