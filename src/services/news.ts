import { News } from "../models/news";
import { apiFetch } from "./api";

export function getAllNews(): Promise<News[]> {
    return apiFetch("/news");
}

export function getNewsById(id: string | number): Promise<News> {
    return apiFetch(`/news/${id}`);
}