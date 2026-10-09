import { User } from "./user";

export interface Course {
  id: number;
  title: string;
  description: string;
  coverImage: string | null;
  user: User;
}

export interface CourseModule {
  id: number;
  title: string;
  description: string;
  coverImage: string | null;
  position: number;
  course: Course;
}

export interface ModuleContent {
  id: number;
  position: number | null;
  content: string;
  coverImage: string | null;
  module: CourseModule;
}