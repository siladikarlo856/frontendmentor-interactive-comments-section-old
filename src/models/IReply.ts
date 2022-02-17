import type { IUser } from "@/models/IUser";

export interface IReply {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo: string;
  user: IUser;
}
