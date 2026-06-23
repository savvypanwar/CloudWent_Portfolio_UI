type JobApplication = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  linkedin: string | null;
  portfolio: string | null;
  coverLetter: string | null;
  resumeUrl: string;
  jobTitle: string;
  status: string;
  createdAt: Date;
};

type JobApplicationCreateInput = Omit<
  JobApplication,
  "id" | "createdAt" | "phone" | "linkedin" | "portfolio" | "coverLetter"
> & {
  phone?: string | null;
  linkedin?: string | null;
  portfolio?: string | null;
  coverLetter?: string | null;
};

type ContactCreateInput = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
};

type UserCreateInput = {
  name: string;
  email: string;
  password: string;
  role?: string;
};

type Contact = ContactCreateInput & {
  id: string;
  createdAt: Date;
};

type MemoryStore = {
  jobApplications: JobApplication[];
  contacts: Contact[];
  users: User[];
};

const seedPassword = "$2b$10$H3FY4D5YlfXNz8xZ653EDeZI416jOJ1N.VRwZlXo2ZN.XpiAitk4S";

const normalizeOptionalString = (value?: string | null) => {
  if (!value) return null;
  return value;
};

const getStore = () => {
  const globalForStore = globalThis as typeof globalThis & {
    cloudwentMemoryStore?: MemoryStore;
  };

  if (!globalForStore.cloudwentMemoryStore) {
    const now = new Date();

    globalForStore.cloudwentMemoryStore = {
      jobApplications: [],
      contacts: [],
      users: [
        {
          id: "seed-admin",
          name: "Admin User",
          email: "admin@cloudwent.com",
          password: seedPassword,
          role: "admin",
          createdAt: now,
          updatedAt: now,
        },
        {
          id: "seed-hr",
          name: "HR User",
          email: "hr@cloudwent.com",
          password: seedPassword,
          role: "hr",
          createdAt: now,
          updatedAt: now,
        },
        {
          id: "seed-employee",
          name: "Employee User",
          email: "employee@cloudwent.com",
          password: seedPassword,
          role: "employee",
          createdAt: now,
          updatedAt: now,
        },
      ],
    };
  }

  return globalForStore.cloudwentMemoryStore;
};

export const db = {
  jobApplication: {
    findMany: ({ orderBy }: { orderBy?: { createdAt?: "asc" | "desc" } } = {}) => {
      const applications = [...getStore().jobApplications];
      const direction = orderBy?.createdAt === "asc" ? 1 : -1;

      return applications.sort(
        (first, second) => direction * (first.createdAt.getTime() - second.createdAt.getTime())
      );
    },
    create: ({ data }: { data: JobApplicationCreateInput }) => {
      const application: JobApplication = {
        id: crypto.randomUUID(),
        name: data.name,
        email: data.email,
        phone: normalizeOptionalString(data.phone),
        linkedin: normalizeOptionalString(data.linkedin),
        portfolio: normalizeOptionalString(data.portfolio),
        coverLetter: normalizeOptionalString(data.coverLetter),
        resumeUrl: data.resumeUrl,
        jobTitle: data.jobTitle,
        status: data.status,
        createdAt: new Date(),
      };

      getStore().jobApplications.push(application);

      return application;
    },
  },
  contact: {
    create: ({ data }: { data: ContactCreateInput }) => {
      const contact: Contact = {
        id: crypto.randomUUID(),
        ...data,
        createdAt: new Date(),
      };

      getStore().contacts.push(contact);

      return contact;
    },
  },
  user: {
    findUnique: ({ where }: { where: { email: string } }) => {
      return getStore().users.find((user) => user.email === where.email) ?? null;
    },
    upsert: ({
      where,
      update,
      create,
    }: {
      where: { email: string };
      update: Partial<UserCreateInput>;
      create: UserCreateInput;
    }) => {
      const existing = db.user.findUnique({ where });

      if (existing) {
        existing.name = update.name ?? existing.name;
        existing.password = update.password ?? existing.password;
        existing.role = update.role ?? existing.role;
        existing.updatedAt = new Date();

        return existing;
      }

      const now = new Date();
      const user: User = {
        id: crypto.randomUUID(),
        name: create.name,
        email: create.email,
        password: create.password,
        role: create.role ?? "employee",
        createdAt: now,
        updatedAt: now,
      };

      getStore().users.push(user);

      return user;
    },
  },
  $disconnect: async () => {},
};
