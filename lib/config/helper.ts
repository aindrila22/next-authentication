import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getTokenData = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";

    const verifyToken: any = jwt.verify(token, process.env.JWT_SECRET!);
    return verifyToken.id;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
