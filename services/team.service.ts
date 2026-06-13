import { api } from "./api";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  isLeader: boolean;
  department: string;
}

export interface CreateTeamMemberData {
  name: string;
  role: string;
  bio?: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  isLeader?: boolean;
  department: string;
}

export interface UpdateTeamMemberData extends Partial<CreateTeamMemberData> {}

class TeamService {
  async getAll(params?: {
    department?: string;
    isLeader?: boolean;
  }): Promise<TeamMember[]> {
    return api.get<TeamMember[]>("/team", { params });
  }

  async getById(id: string): Promise<TeamMember> {
    return api.get<TeamMember>(`/team/${id}`);
  }

  async getLeadership(): Promise<TeamMember[]> {
    return api.get<TeamMember[]>("/team/leadership");
  }

  async getDepartments(): Promise<string[]> {
    return api.get<string[]>("/team/departments");
  }

  async create(data: CreateTeamMemberData): Promise<TeamMember> {
    return api.post<TeamMember>("/team", data);
  }

  async update(id: string, data: UpdateTeamMemberData): Promise<TeamMember> {
    return api.put<TeamMember>(`/team/${id}`, data);
  }

  async delete(id: string): Promise<void> {
    return api.delete(`/team/${id}`);
  }
}

export const teamService = new TeamService();