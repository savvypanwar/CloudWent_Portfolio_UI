import { api } from "./api";

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  description: string;
  client?: string;
  date?: string;
  role?: string;
  tags: string[];
  images: string[];
  results?: {
    label: string;
    value: string;
    description?: string;
  }[];
  link?: string;
  featured: boolean;
}

export interface CreateProjectData {
  title: string;
  description: string;
  client?: string;
  date?: string;
  role?: string;
  tags: string[];
  images: string[];
  results?: { label: string; value: string; description?: string }[];
  link?: string;
  featured?: boolean;
}

export interface UpdateProjectData extends Partial<CreateProjectData> {}

class PortfolioService {
  async getAll(params?: {
    featured?: boolean;
    tag?: string;
    limit?: number;
    page?: number;
  }): Promise<{ projects: PortfolioProject[]; total: number }> {
    return api.get<{ projects: PortfolioProject[]; total: number }>("/portfolio", { params });
  }

  async getBySlug(slug: string): Promise<PortfolioProject> {
    return api.get<PortfolioProject>(`/portfolio/${slug}`);
  }

  async getFeatured(): Promise<PortfolioProject[]> {
    return api.get<PortfolioProject[]>("/portfolio/featured");
  }

  async getTags(): Promise<string[]> {
    return api.get<string[]>("/portfolio/tags");
  }

  async create(data: CreateProjectData): Promise<PortfolioProject> {
    return api.post<PortfolioProject>("/portfolio", data);
  }

  async update(id: string, data: UpdateProjectData): Promise<PortfolioProject> {
    return api.put<PortfolioProject>(`/portfolio/${id}`, data);
  }

  async delete(id: string): Promise<void> {
    return api.delete(`/portfolio/${id}`);
  }
}

export const portfolioService = new PortfolioService();