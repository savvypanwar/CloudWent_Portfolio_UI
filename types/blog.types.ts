export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  tags: string[];
  featured: boolean;
  readTime: number;
  views?: number;
  likes?: number;
  comments?: number;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  postCount?: number;
}

export interface BlogComment {
  id: string;
  postId: string;
  authorName: string;
  authorEmail: string;
  content: string;
  date: string;
  approved: boolean;
  parentId?: string;
}

export interface CreateBlogPostData {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export interface UpdateBlogPostData extends Partial<CreateBlogPostData> {}

export interface BlogPostParams {
  category?: string;
  featured?: boolean;
  limit?: number;
  page?: number;
  search?: string;
  tag?: string;
}

export interface BlogPostResponse {
  posts: BlogPost[];
  total: number;
  currentPage: number;
  totalPages: number;
}

export interface FeaturedBlogPost extends BlogPost {
  isFeatured: true;
}