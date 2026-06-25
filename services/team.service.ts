import { api } from "./api";
import type {
  TeamMemberInput,
  TeamMemberProfile,
  TeamQueryOptions,
} from "@/lib/team/types";

class TeamService {
  async getAll(options?: TeamQueryOptions): Promise<TeamMemberProfile[]> {
    return api.get<TeamMemberProfile[]>("/team", { params: options });
  }

  async getByIdentifier(identifier: string): Promise<TeamMemberProfile> {
    return api.get<TeamMemberProfile>(`/team/${identifier}`);
  }

  async getLeadership(): Promise<TeamMemberProfile[]> {
    return api.get<TeamMemberProfile[]>("/team", { params: { team: "leadership" } });
  }

  async create(data: TeamMemberInput): Promise<TeamMemberProfile> {
    return api.post<TeamMemberProfile>("/team", data);
  }

  async update(
    identifier: string,
    data: Partial<TeamMemberInput>
  ): Promise<TeamMemberProfile> {
    return api.put<TeamMemberProfile>(`/team/${identifier}`, data);
  }

  async delete(identifier: string): Promise<void> {
    return api.delete(`/team/${identifier}`);
  }
}

export const teamService = new TeamService();
