import { api } from "./api";

/* =====================================================
   Company
===================================================== */

export interface Company {
  id: string;
  name: string;

  address?: string | null;
  email?: string | null;
  website?: string | null;

  logoUrl?: string | null;
  signatureUrl?: string | null;

  hrName?: string | null;
  hrDesignation?: string | null;
  hrEmail?: string | null;

  createdAt: string;
  updatedAt: string;
}

/* =====================================================
   Offer Letter
===================================================== */

export interface OfferLetter {
  id: string;

  referenceNo: string;
  letterDate: string;

  /* Candidate */

  candidateName: string;
  candidateEmail?: string | null;
  candidatePhone?: string | null;
  candidateAddress?: string | null;

  /* Internship */

  position: string;
  internshipType?: string | null;
  duration: string;
  joiningDate: string;
  workMode: string;

  /* Compensation */

  initialPeriod?: string | null;
  initialStipend?: string | null;
  paidPeriod?: string | null;

  monthlyStipend?: number | null;
  totalStipend?: number | null;

  /* PPO */

  ppoEligible: boolean;
  ppoDescription?: string | null;

  /* Company */

  companyId: string;
  company?: Company | null;

  /* Acceptance */

  acceptanceEnabled: boolean;
  acceptanceDate?: string | null;

  /* Document */

  status:
    | "draft"
    | "generated"
    | "sent"
    | "accepted"
    | "rejected"
    | "cancelled";

  pdfUrl?: string | null;
  generatedAt?: string | null;

  /* Application */

  applicationId?: string | null;

  /* Timestamps */

  createdAt: string;
  updatedAt: string;
}

/* =====================================================
   Create Offer Letter
===================================================== */

export interface CreateOfferLetterData {
  referenceNo: string;
  letterDate?: string;

  /* Candidate */

  candidateName: string;
  candidateEmail?: string;
  candidatePhone?: string;
  candidateAddress?: string;

  /* Internship */

  position: string;
  internshipType?: string;
  duration: string;
  joiningDate: string;
  workMode: string;

  /* Compensation */

  initialPeriod?: string;
  initialStipend?: string;
  paidPeriod?: string;

  monthlyStipend?: number;
  totalStipend?: number;

  /* PPO */

  ppoEligible?: boolean;
  ppoDescription?: string;

  /* Company */

  companyId: string;

  /* Acceptance */

  acceptanceEnabled?: boolean;
  acceptanceDate?: string;

  /* Document */

  status?:
    | "draft"
    | "generated"
    | "sent"
    | "accepted"
    | "rejected"
    | "cancelled";

  pdfUrl?: string;
  generatedAt?: string;

  /* Application */

  applicationId?: string;
}

/* =====================================================
   Update Offer Letter
===================================================== */

export interface UpdateOfferLetterData
  extends Partial<CreateOfferLetterData> {}

/* =====================================================
   API Response Types
===================================================== */

export interface OfferLetterListResponse {
  success: boolean;
  data: OfferLetter[];
}

export interface OfferLetterResponse {
  success: boolean;
  message?: string;
  data: OfferLetter;
}

export interface OfferLetterDeleteResponse {
  success: boolean;
  message?: string;
}

/* =====================================================
   Offer Letter Service
===================================================== */

class OfferLetterService {
  /* ===================================================
     Get All
  =================================================== */

  async getAll(): Promise<OfferLetter[]> {
    const response =
      await api.get<OfferLetterListResponse>(
        "/documents/offer-letter"
      );

    return response.data;
  }

  /* ===================================================
     Get By ID
  =================================================== */

  async getById(
    id: string
  ): Promise<OfferLetter> {
    const response =
      await api.get<OfferLetterResponse>(
        `/documents/offer-letter/${id}`
      );

    return response.data;
  }

      /* ===================================================
     Create
  =================================================== */

  async create(
    data: CreateOfferLetterData
  ): Promise<OfferLetter> {
    const response =
      await api.post<OfferLetterResponse>(
        "/documents/offer-letter",
        data
      );

    return response.data;
  }

  /* ===================================================
     Update
  =================================================== */

  async update(
    id: string,
    data: UpdateOfferLetterData
  ): Promise<OfferLetter> {
    const response =
      await api.put<OfferLetterResponse>(
        `/documents/offer-letter/${id}`,
        data
      );

    return response.data;
  }

  /* ===================================================
     Delete
  =================================================== */

  async delete(
    id: string
  ): Promise<void> {
    await api.delete(
      `/documents/offer-letter/${id}`
    );
  }

  /* ===================================================
     Get By Company
  =================================================== */

  async getByCompany(
    companyId: string
  ): Promise<OfferLetter[]> {
    const response =
      await api.get<OfferLetterListResponse>(
        "/documents/offer-letter",
        {
          params: {
            companyId,
          },
        }
      );

    return response.data;
  }

  /* ===================================================
     Get By Application
  =================================================== */

  async getByApplication(
    applicationId: string
  ): Promise<OfferLetter[]> {
    const response =
      await api.get<OfferLetterListResponse>(
        "/documents/offer-letter",
        {
          params: {
            applicationId,
          },
        }
      );

    return response.data;
  }

  /* ===================================================
     Get By Status
  =================================================== */

  async getByStatus(
    status: OfferLetter["status"]
  ): Promise<OfferLetter[]> {
    const response =
      await api.get<OfferLetterListResponse>(
        "/documents/offer-letter",
        {
          params: {
            status,
          },
        }
      );

    return response.data;
  }
}

/* =====================================================
   Export
===================================================== */

export const offerLetterService =
  new OfferLetterService();