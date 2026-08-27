import { User } from "./user";

export interface News {
    id: number;
    title: string;
    description: string;
    content: string;
    summary: string;
    coverImage: string | null;
    upvotes: number;
    user: User;
    createdAt: string;
}