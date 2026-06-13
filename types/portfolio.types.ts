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
  results?: ProjectResult[];
  link?: string;
  featured: boolean;
  serviceCategory?: string;
  testimonial?: string;
}

export interface ProjectResult {
  label: string;
  value: string;
  description?: string;
}

export interface CreateProjectData {
  title: string;
  description: string;
  client?: string;
  date?: string;
  role?: string;
  tags: string[];
  images: string[];
  results?: ProjectResult[];
  link?: string;
  featured?: boolean;
  serviceCategory?: string;
}

export interface UpdateProjectData extends Partial<CreateProjectData> {}

export interface PortfolioParams {
  featured?: boolean;
  tag?: string;
  limit?: number;
  page?: number;
  serviceCategory?: string;
}

export interface PortfolioResponse {
  projects: PortfolioProject[];
  total: number;
  currentPage: number;
  totalPages: number;
}

export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface PortfolioStats {
  totalProjects: number;
  featuredProjects: number;
  totalTags: number;
  serviceCategories: number;
}