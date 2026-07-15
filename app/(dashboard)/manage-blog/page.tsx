import Image from "next/image";
import Link from "next/link";
import { Plus, Eye, Pencil, Trash2 } from "lucide-react";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/Button/Button";
import { deleteBlogPost, getManagedBlogPosts, revalidateBlogPages } from "@/lib/blog";
import type { BlogPostProfile } from "@/lib/blog";

async function deleteBlogPostAction(formData: FormData) {
  "use server";

  const slug = formData.get("slug") as string;

  try {
    await deleteBlogPost(slug);
    revalidateBlogPages();
  } catch (error) {
    console.error("Delete blog post failed:", error);
    throw new Error("Failed to delete blog post");
  }

  redirect("/manage-blog");
}

export default async function BlogDashboardPage() {
  const posts = await getManagedBlogPosts();

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Blog Management</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage your blog posts, create new articles, and track publication status.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="glass-effect border-border hover:bg-muted/50"
          >
            <Link href="/blog" target="_blank">
              View Public Page
            </Link>
          </Button>
          <Button
            asChild
            variant="primary"
            size="sm"
            className="glass-effect shadow-md"
          >
            <Link href="/manage-blog/new">
              <Plus className="w-4 h-4 mr-2" /> Add New Post
            </Link>
          </Button>
        </div>
      </div>

      <div className="glass-effect border-border rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/20 border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Post
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Author
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {posts.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-10 text-center text-muted-foreground"
                  >
                    No blog posts in the database yet. Add your first post.
                  </td>
                </tr>
              ) : (
                posts.map((post: BlogPostProfile) => (
                  <tr
                    key={post.id}
                    className="hover:bg-muted/10 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                          {post.image ? (
                            <Image
                              src={post.image}
                              alt={post.title}
                              width={40}
                              height={40}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground font-bold text-xs">
                              {post.title.charAt(0).toUpperCase()}
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm">
                            {post.title}
                          </p>
                          <p className="text-xs text-muted-foreground line-clamp-1">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground">
                      {post.category}
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground">
                      {post.author}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
                          post.status === "PUBLISHED"
                            ? "bg-green-500/10 text-green-600 border-green-500/20"
                            : post.status === "ARCHIVED"
                            ? "bg-gray-500/10 text-gray-600 border-gray-500/20"
                            : "bg-amber-500/10 text-amber-600 border-amber-500/20"
                        }`}
                      >
                        {post.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right flex items-center justify-end gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 border-border hover:bg-muted/50"
                        asChild
                      >
                        <Link href={`/blog/${post.slug}`} target="_blank">
                          <Eye className="w-3.5 h-3.5 text-muted-foreground" />
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 border-border hover:bg-muted/50"
                        asChild
                      >
                        <Link href={`/manage-blog/${post.slug}/edit`}>
                          <Pencil className="w-3.5 h-3.5 text-muted-foreground" />
                        </Link>
                      </Button>

                      <form action={deleteBlogPostAction}>
                        <input type="hidden" name="slug" value={post.slug} />
                        <Button
                          type="submit"
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 border-border hover:bg-destructive/20 hover:text-destructive"
                        >
                          <Trash2 className="w-3.5 h-3.5 text-muted-foreground" />
                        </Button>
                      </form>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <span>
            Showing 1 to {posts.length} of {posts.length} entries
          </span>
        </div>
      </div>
    </div>
  );
}
