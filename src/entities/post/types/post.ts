export interface Post {
  id: string;
  title: string;
  excerpt: string;
  tags: string[];
  author: PostAuthor;
  image_url: string;
}

export interface PostAuthor {
  name: string;
  image_url: string;
}
