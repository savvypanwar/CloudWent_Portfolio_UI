export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  instagram?: string;
  isLeader: boolean;
  department: string;
  displayOrder: number;
  joinedAt?: string;
}

export interface CreateTeamMemberData {
  name: string;
  role: string;
  bio?: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  instagram?: string;
  isLeader?: boolean;
  department: string;
  displayOrder?: number;
}

export interface UpdateTeamMemberData extends Partial<CreateTeamMemberData> {}

export interface TeamParams {
  department?: string;
  isLeader?: boolean;
}

export interface DepartmentInfo {
  id: string;
  name: string;
  description?: string;
  memberCount: number;
}

export interface TeamMemberSkill {
  id: string;
  memberId: string;
  skillName: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
}

export interface ProjectAssignment {
  id: string;
  memberId: string;
  projectId: string;
  role: string;
  startDate: string;
  endDate?: string;
}

export interface TeamStats {
  totalMembers: number;
  leaders: number;
  departments: number;
}