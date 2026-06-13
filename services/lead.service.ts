import { api } from "./api";

export interface Lead {
  id: string;
  name: string;
  company: string;
  email: string;
  phone?: string;
  service: string;
  budget?: string;
  details: string;
  source?: string;
  status: "new" | "contacted" | "qualified" | "proposal" | "won" | "lost";
  createdAt: string;
  updatedAt: string;
}

export interface CreateLeadData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  service: string;
  budget?: string;
  details: string;
  source?: string;
}

export interface UpdateLeadData extends Partial<CreateLeadData> {
  status?: Lead["status"];
}

class LeadService {
  async create(data: CreateLeadData): Promise<Lead> {
    return api.post<Lead>("/leads", data);
  }

  async getAll(params?: {
    status?: Lead["status"];
    service?: string;
    limit?: number;
    page?: number;
  }): Promise<{ leads: Lead[]; total: number }> {
    return api.get<{ leads: Lead[]; total: number }>("/leads", { params });
  }

  async getById(id: string): Promise<Lead> {
    return api.get<Lead>(`/leads/${id}`);
  }

  async update(id: string, data: UpdateLeadData): Promise<Lead> {
    return api.put<Lead>(`/leads/${id}`, data);
  }

  async updateStatus(id: string, status: Lead["status"]): Promise<Lead> {
    return api.patch<Lead>(`/leads/${id}/status`, { status });
  }

  async delete(id: string): Promise<void> {
    return api.delete(`/leads/${id}`);
  }

  async getByEmail(email: string): Promise<Lead[]> {
    return api.get<Lead[]>("/leads", { params: { email } });
  }
}

export const leadService = new LeadService();