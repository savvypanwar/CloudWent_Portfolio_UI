import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import path from "node:path";

type SqliteStatement = {
  all: (...values: unknown[]) => Record<string, unknown>[];
  run: (...values: unknown[]) => unknown;
};

type SqliteDatabase = {
  exec: (sql: string) => void;
  prepare: (sql: string) => SqliteStatement;
};

type DatabaseSyncConstructor = new (path: string) => SqliteDatabase;

type JobApplicationCreateInput = {
  name: string;
  email: string;
  phone?: string | null;
  linkedin?: string | null;
  portfolio?: string | null;
  coverLetter?: string | null;
  resumeUrl: string;
  jobTitle: string;
  status?: string;
};

type ContactCreateInput = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type JobApplication = Omit<JobApplicationCreateInput, "status"> & {
  id: string;
  status: string;
  createdAt: Date;
};

const require = createRequire(import.meta.url);
let DatabaseSync: DatabaseSyncConstructor | undefined;

const getDatabaseSync = () => {
  if (!DatabaseSync) {
    DatabaseSync = (require("node:sqlite") as {
      DatabaseSync: DatabaseSyncConstructor;
    }).DatabaseSync;
  }

  return DatabaseSync;
};

const getDatabasePath = () => {
  const databaseUrl = process.env.DATABASE_URL ?? "file:./dev.db";

  if (databaseUrl.startsWith("file:")) {
    if (databaseUrl === "file:./dev.db") {
      return path.join(/*turbopackIgnore: true*/ process.cwd(), "dev.db");
    }

    return fileURLToPath(databaseUrl);
  }

  return path.resolve(/*turbopackIgnore: true*/ process.cwd(), databaseUrl);
};

const getDatabase = () => {
  const globalForSqlite = globalThis as typeof globalThis & {
    cloudwentDb?: SqliteDatabase;
  };

  if (!globalForSqlite.cloudwentDb) {
    const database = new (getDatabaseSync())(getDatabasePath());

    database.exec(`
      CREATE TABLE IF NOT EXISTS JobApplication (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        linkedin TEXT,
        portfolio TEXT,
        coverLetter TEXT,
        resumeUrl TEXT NOT NULL,
        jobTitle TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'pending',
        createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS Contact (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        subject TEXT NOT NULL,
        message TEXT NOT NULL,
        createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
      );
    `);

    globalForSqlite.cloudwentDb = database;
  }

  return globalForSqlite.cloudwentDb;
};

const normalizeOptionalString = (value?: string | null) => {
  if (!value) return null;
  return value;
};

export const db = {
  jobApplication: {
    findMany: ({ orderBy }: { orderBy?: { createdAt?: "asc" | "desc" } } = {}): JobApplication[] => {
      const direction = orderBy?.createdAt === "asc" ? "ASC" : "DESC";
      const rows = getDatabase()
        .prepare(`SELECT * FROM JobApplication ORDER BY createdAt ${direction}`)
        .all();

      return rows.map((row) => ({
        id: String(row.id),
        name: String(row.name),
        email: String(row.email),
        phone: normalizeOptionalString(row.phone ? String(row.phone) : null),
        linkedin: normalizeOptionalString(row.linkedin ? String(row.linkedin) : null),
        portfolio: normalizeOptionalString(row.portfolio ? String(row.portfolio) : null),
        coverLetter: normalizeOptionalString(row.coverLetter ? String(row.coverLetter) : null),
        resumeUrl: String(row.resumeUrl),
        jobTitle: String(row.jobTitle),
        status: String(row.status),
        createdAt: new Date(String(row.createdAt)),
      }));
    },
    create: ({ data }: { data: JobApplicationCreateInput }) => {
      const id = crypto.randomUUID();

      getDatabase()
        .prepare(
          `INSERT INTO JobApplication (
            id, name, email, phone, linkedin, portfolio, coverLetter, resumeUrl, jobTitle, status
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
        )
        .run(
          id,
          data.name,
          data.email,
          normalizeOptionalString(data.phone),
          normalizeOptionalString(data.linkedin),
          normalizeOptionalString(data.portfolio),
          normalizeOptionalString(data.coverLetter),
          data.resumeUrl,
          data.jobTitle,
          data.status ?? "pending"
        );

      return { id, ...data };
    },
  },
  contact: {
    create: ({ data }: { data: ContactCreateInput }) => {
      const id = crypto.randomUUID();

      getDatabase()
        .prepare(
          `INSERT INTO Contact (id, name, email, subject, message)
           VALUES (?, ?, ?, ?, ?)`
        )
        .run(id, data.name, data.email, data.subject, data.message);

      return { id, ...data };
    },
  },
};
