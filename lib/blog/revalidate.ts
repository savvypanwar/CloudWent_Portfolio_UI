import { revalidatePath } from "next/cache";

export function revalidateBlogPages() {
  revalidatePath("/");
  revalidatePath("/blog");
  revalidatePath("/blog/[slug]");
}
