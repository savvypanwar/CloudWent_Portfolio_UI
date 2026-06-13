export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt: string;
  status: "new" | "read" | "replied" | "archived";
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface ContactParams {
  status?: "new" | "read" | "replied" | "archived";
  limit?: number;
  page?: number;
  search?: string;
}

export interface ContactResponse {
  messages: ContactMessage[];
  total: number;
  currentPage: number;
  totalPages: number;
}

export interface ContactStats {
  totalMessages: number;
  newMessages: number;
  readMessages: number;
  repliedMessages: number;
}

export interface OfficeLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  phone: string;
  email: string;
  hours: string;
  latitude?: number;
  longitude?: number;
}

export interface ContactFormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  required: boolean;
  placeholder?: string;
  options?: string[];
}