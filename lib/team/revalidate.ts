import { revalidatePath } from "next/cache";

export function revalidateTeamPages() {
  revalidatePath("/");
  revalidatePath("/about");
  revalidatePath("/team");
  revalidatePath("/myteam");
}
