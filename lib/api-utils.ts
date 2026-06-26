import { NextResponse } from "next/server";
import { prisma } from "./prisma/prisma";

// Generic CRUD helpers for API routes using runtime Prisma access
// Since Prisma generate --no-engine was used, we use generic patterns

export type ModelName =
  | "blogPost"
  | "project"
  | "testimonial"
  | "service"
  | "jobOpening"
  | "faq"
  | "technology"
  | "processStep"
  | "perk"
  | "companyValue"
  | "siteStat"
  | "pricingPlan"
  | "contact"
  | "application"
  | "teamMember";

function getModel(modelName: ModelName) {
  return (prisma as any)[modelName];
}

export async function genericList(modelName: ModelName, options?: { where?: any; orderBy?: any; take?: number }) {
  const model = getModel(modelName);
  const items = await model.findMany({
    where: options?.where,
    orderBy: options?.orderBy ?? { order: "asc" },
    take: options?.take,
  });
  return NextResponse.json(items);
}

export async function genericGetById(modelName: ModelName, id: string) {
  const model = getModel(modelName);
  const item = await model.findUnique({ where: { id } });
  if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(item);
}

export async function genericGetBySlug(modelName: ModelName, slug: string) {
  const model = getModel(modelName);
  const item = await model.findUnique({ where: { slug } });
  if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(item);
}

export async function genericCreate(modelName: ModelName, data: any) {
  const model = getModel(modelName);
  const item = await model.create({ data });
  return NextResponse.json(item, { status: 201 });
}

export async function genericUpdate(modelName: ModelName, id: string, data: any) {
  const model = getModel(modelName);
  const item = await model.update({ where: { id }, data });
  return NextResponse.json(item);
}

export async function genericDelete(modelName: ModelName, id: string) {
  const model = getModel(modelName);
  await model.delete({ where: { id } });
  return NextResponse.json({ success: true });
}

export function handleApiError(error: unknown) {
  console.error("API error:", error);
  return NextResponse.json(
    { error: "Internal server error" },
    { status: 500 }
  );
}
