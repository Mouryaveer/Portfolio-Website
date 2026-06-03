import type { Request } from "express";

export function getSessionCookieOptions(req: Request) {
  const secure = req.protocol === "https" || req.headers["x-forwarded-proto"] === "https";

  return {
    httpOnly: true,
    secure,
    sameSite: secure ? "none" : "lax",
    path: "/",
  } as const;
}
