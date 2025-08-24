import { Service, ServiceCategory } from '../types';
import { serviceCategories as mockServiceCategories } from '../api/mockData/serviceCategories';
import { engineeringServices as mockServices } from '../api/mockData/engineeringServices';

// Server-side function to get service by slug (for use in server components)
export async function getServiceBySlug(slug: string): Promise<Service | null> {
  // Find service by slug from mock data
  const foundService = mockServices.find(svc => svc.slug === slug) || null;
  return foundService;
}

// Server-side function to get service category by slug (for use in server components)
export async function getServiceCategoryBySlug(slug: string): Promise<ServiceCategory | null> {
  // Find category by slug from mock data
  const foundCategory = mockServiceCategories.find(cat => cat.slug === slug) || null;
  return foundCategory;
}

// Server-side function to get all services
export async function getAllServices(): Promise<Service[]> {
  return mockServices;
}

// Server-side function to get all service categories
export async function getAllServiceCategories(): Promise<ServiceCategory[]> {
  return mockServiceCategories;
}

// Server-side function to get services by category ID
export async function getServicesByCategoryId(categoryId: string): Promise<Service[]> {
  return mockServices.filter(service => service.categoryId === categoryId);
}