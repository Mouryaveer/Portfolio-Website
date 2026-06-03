import type { Request, Response } from "express";
import type { User } from "../../drizzle/schema";

export type TrpcContext = {
  req: Request;
  res: Response;
  user?: User | null;
};

export async function createContext({
  req,
  res,
}: {
  req: Request;
  res: Response;
}): Promise<TrpcContext> {
  return { req, res, user: null };
}
