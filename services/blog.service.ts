import { api } from "./api";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  tags: string[];
  featured: boolean;
  readTime: number;
}

export interface CreateBlogPostData {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export interface UpdateBlogPostData extends Partial<CreateBlogPostData> {}

class BlogService {
  async getAll(params?: {
    category?: string;
    featured?: boolean;
    limit?: number;
    page?: number;
  }): Promise<{ posts: BlogPost[]; total: number }> {
    return api.get<{ posts: BlogPost[]; total: number }>("/blog", { params });
  }

  async getBySlug(slug: string): Promise<BlogPost> {
    return api.get<BlogPost>(`/blog/${slug}`);
  }

  async getFeatured(): Promise<BlogPost[]> {
    return api.get<BlogPost[]>("/blog/featured");
  }

  async getCategories(): Promise<string[]> {
    return api.get<string[]>("/blog/categories");
  }

  async create(data: CreateBlogPostData): Promise<BlogPost> {
    return api.post<BlogPost>("/blog", data);
  }

  async update(id: string, data: UpdateBlogPostData): Promise<BlogPost> {
    return api.put<BlogPost>(`/blog/${id}`, data);
  }

  async delete(id: string): Promise<void> {
    return api.delete(`/blog/${id}`);
  }
}

export const blogService = new BlogService();