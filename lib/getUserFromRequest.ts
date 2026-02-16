import { NextRequest } from "next/server";
import { verifyToken } from "./auth";

export function getUserFromRequest(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token) return null;

  const decoded = verifyToken(token);
  if (!decoded) return null;

  return decoded.userId;
}
