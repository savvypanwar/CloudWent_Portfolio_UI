import { api } from "./api";

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  postedAt: string;
  deadline: string;
  status: "open" | "closed";
}

export interface JobApplication {
  id: string;
  jobId: string;
  name: string;
  email: string;
  phone: string;
  coverLetter: string;
  resumeUrl: string;
  linkedin?: string;
  portfolio?: string;
  status: "pending" | "reviewed" | "interview" | "offered" | "rejected";
  appliedAt: string;
}

export interface CreateApplicationData {
  jobId: string;
  name: string;
  email: string;
  phone: string;
  coverLetter: string;
  resume: File;
  linkedin?: string;
  portfolio?: string;
}

class CareerService {
  async getAllJobs(params?: {
    department?: string;
    location?: string;
    type?: string;
    status?: "open" | "closed";
  }): Promise<Job[]> {
    return api.get<Job[]>("/careers", { params });
  }

  async getJobById(id: string): Promise<Job> {
    return api.get<Job>(`/careers/${id}`);
  }

  async getOpenJobs(): Promise<Job[]> {
    return api.get<Job[]>("/careers/open");
  }

  async applyForJob(data: CreateApplicationData): Promise<JobApplication> {
    const formData = new FormData();
    formData.append("jobId", data.jobId);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("coverLetter", data.coverLetter);
    formData.append("resume", data.resume);
    if (data.linkedin) formData.append("linkedin", data.linkedin);
    if (data.portfolio) formData.append("portfolio", data.portfolio);
    return api.post<JobApplication>("/careers/apply", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  async getApplicationStatus(applicationId: string): Promise<JobApplication> {
    return api.get<JobApplication>(`/careers/applications/${applicationId}`);
  }

  async getApplicationsByEmail(email: string): Promise<JobApplication[]> {
    return api.get<JobApplication[]>("/careers/applications", { params: { email } });
  }
}

export const careerService = new CareerService();