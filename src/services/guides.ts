import { apiFetch } from "./api";
import { Guide, GuideStep } from "../models/guide";

export function getAllGuides(): Promise<Guide[]> {
  return apiFetch("/guides");
}

export function getGuideById(id: string | number): Promise<Guide> {
  return apiFetch(`/guides/${id}`);
}

export function getGuideSteps(guideId: string | number): Promise<GuideStep[]> {
  return apiFetch(`/guides/${guideId}/steps`);
}