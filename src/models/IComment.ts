import type { IUser } from "@/models/IUser";
import type { IReply } from "@/models/IReply";

export interface IComment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: IUser;
  replies: IReply[];
}
