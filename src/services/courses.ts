import { Course, CourseModule, ModuleContent } from '../models/course';
import { apiFetch } from './api';

export function getCourses(): Promise<Course[]> {
  return apiFetch('/courses');
}

export function getCourseById(id: string | number): Promise<Course> {
  return apiFetch(`/courses/${id}`);
}

export function getCourseModules(courseId: string | number): Promise<CourseModule[]> {
  return apiFetch(`/courses/${courseId}/modules`);
}

export function getCourseModule(courseId: string | number, moduleId: string | number): Promise<CourseModule> {
  return apiFetch(`/courses/${courseId}/modules/${moduleId}`);
}

export function getModuleContents(courseId: string | number, moduleId: string | number): Promise<ModuleContent[]> {
  return apiFetch(`/courses/${courseId}/modules/${moduleId}/content`);
}