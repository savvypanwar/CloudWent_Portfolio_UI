export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote" | "Internship";
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  postedAt: string;
  deadline: string;
  status: "open" | "closed" | "draft";
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
  status: "pending" | "reviewed" | "interview" | "offered" | "rejected" | "withdrawn";
  appliedAt: string;
  reviewedAt?: string;
  notes?: string;
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

export interface JobParams {
  department?: string;
  location?: string;
  type?: string;
  status?: "open" | "closed";
}

export interface Department {
  id: string;
  name: string;
  description?: string;
  openPositions?: number;
}

export interface JobStats {
  totalApplications: number;
  pendingApplications: number;
  interviewedApplications: number;
  offeredApplications: number;
  rejectedApplications: number;
}