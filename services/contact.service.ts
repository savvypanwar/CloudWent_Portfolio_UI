import { api } from "./api";

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt: string;
  status: "new" | "read" | "replied";
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

class ContactService {
  async sendMessage(data: ContactFormData): Promise<ContactMessage> {
    return api.post<ContactMessage>("/contact", data);
  }

  async getMessages(params?: {
    status?: "new" | "read" | "replied";
    limit?: number;
    page?: number;
  }): Promise<{ messages: ContactMessage[]; total: number }> {
    return api.get<{ messages: ContactMessage[]; total: number }>("/contact", { params });
  }

  async getMessage(id: string): Promise<ContactMessage> {
    return api.get<ContactMessage>(`/contact/${id}`);
  }

  async markAsRead(id: string): Promise<ContactMessage> {
    return api.patch<ContactMessage>(`/contact/${id}/read`);
  }

  async markAsReplied(id: string): Promise<ContactMessage> {
    return api.patch<ContactMessage>(`/contact/${id}/replied`);
  }

  async deleteMessage(id: string): Promise<void> {
    return api.delete(`/contact/${id}`);
  }
}

export const contactService = new ContactService();