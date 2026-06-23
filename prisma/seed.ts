import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const users = [
    { name: "Admin User", email: "admin@cloudwent.com", role: "admin" },
    { name: "HR User", email: "hr@cloudwent.com", role: "hr" },
    { name: "Employee User", email: "employee@cloudwent.com", role: "employee" },
  ];

  for (const user of users) {
    const hashedPassword = await bcrypt.hash("password123", 10);
    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: {
        name: user.name,
        email: user.email,
        password: hashedPassword,
        role: user.role,
      },
    });
  }

  console.log("✅ Seed users created!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());