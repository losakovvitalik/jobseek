import { Comment } from '@/entities/comment/model/type';

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  tags: string[];
  author: PostAuthor;
  image_url: string;
  top_comment: Comment;
  likes: number;
  comments: number;
}

export interface PostAuthor {
  name: string;
  image_url: string;
}
