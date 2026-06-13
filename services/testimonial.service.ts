import { api } from "./api";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  quote: string;
  rating: number;
  image: string;
  featured: boolean;
  createdAt: string;
}

export interface CreateTestimonialData {
  name: string;
  role: string;
  company?: string;
  quote: string;
  rating: number;
  image: string;
  featured?: boolean;
}

export interface UpdateTestimonialData extends Partial<CreateTestimonialData> {}

class TestimonialService {
  async getAll(params?: {
    featured?: boolean;
    rating?: number;
    limit?: number;
    page?: number;
  }): Promise<{ testimonials: Testimonial[]; total: number }> {
    return api.get<{ testimonials: Testimonial[]; total: number }>("/testimonials", { params });
  }

  async getById(id: string): Promise<Testimonial> {
    return api.get<Testimonial>(`/testimonials/${id}`);
  }

  async getFeatured(): Promise<Testimonial[]> {
    return api.get<Testimonial[]>("/testimonials/featured");
  }

  async create(data: CreateTestimonialData): Promise<Testimonial> {
    return api.post<Testimonial>("/testimonials", data);
  }

  async update(id: string, data: UpdateTestimonialData): Promise<Testimonial> {
    return api.put<Testimonial>(`/testimonials/${id}`, data);
  }

  async delete(id: string): Promise<void> {
    return api.delete(`/testimonials/${id}`);
  }
}

export const testimonialService = new TestimonialService();