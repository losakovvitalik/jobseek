export interface News {
  id: string;
  title: string;
  excerpt: string;
  tags: string[];
  author: NewsAuthor;
  image_url: string;
}

export interface NewsAuthor {
  name: string;
  image_url: string;
}
