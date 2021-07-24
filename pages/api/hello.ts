import { NextApiRequest, NextApiResponse } from "next";

export default (
  req: NextApiRequest,
  res: NextApiResponse<{ text: string }>
): void => {
  res.status(200).json({ text: "Hello" });
};
