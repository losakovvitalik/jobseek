import { paths } from '@/lib/paths';
import { Badge } from '@/shared/ui/badge';
import { Button } from '@/shared/ui/button';
import Typography from '@/shared/ui/typography';
import { Heart, MessageSquareText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Post } from '../types/post';

export interface PostCardProps {
  post: Post;
  className?: string;
}

const PostCard = ({ post, className }: PostCardProps) => {
  return (
    <div className={className}>
      <div className="mb-3 flex items-center gap-1">
        <Image
          className="h-6 w-6 rounded-full object-cover"
          src={post.author.image_url}
          alt=""
          width={48}
          height={48}
        />
        <Typography className="font-medium">{post.author.name}</Typography>
      </div>
      <Typography className="font-bold" size={'xl'}>
        {post.title}
      </Typography>
      <Typography size={'sm'}>{post.excerpt}</Typography>

      <div className="mt-2 flex gap-2">
        {post.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <div className="mt-2 flex justify-end">
        <Button className="ml-auto" asChild size={'sm'}>
          <Link href={paths.posts.single('34')}>Подробнее</Link>
        </Button>
      </div>

      <div className="mt-4 flex justify-between">
        <div className="flex items-center gap-1">
          <Heart />
          <Typography className="font-bold" size={'sm'}>
            {post.likes}
          </Typography>
        </div>
        <div className="flex items-center gap-1">
          <MessageSquareText />
          <Typography className="font-bold" size={'sm'}>
            {post.comments}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
