import { Agency } from "./agency";
import { User } from "./user";

export interface Guide {
  id: number;
  title: string;
  description: string;
  content: string;
  coverImage: string | null;
  agency: Agency;
  user: User;
  createdAt: string;
}

export interface GuideStep {
  id: number;
  position: number;
  image: string | null;
  content: string;
}