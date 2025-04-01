import { Badge } from '@/shared/ui/badge';
import { Card, CardContent } from '@/shared/ui/card';
import Typography from '@/shared/ui/typography';
import { Heart, MessageSquareText } from 'lucide-react';
import Image from 'next/image';
import { Post } from '../types/post';

export interface PostCardProps {
  post: Post;
  className?: string;
}

const PostCard = ({ post, className }: PostCardProps) => {
  return (
    <Card className={className}>
      <CardContent>
        <div className="my-1 flex items-center gap-1">
          <Image
            className="h-6 w-6 rounded-full object-cover"
            src={post.author.image_url}
            alt=""
            width={48}
            height={48}
          />
          <Typography className="font-medium">{post.author.name}</Typography>
        </div>
        <Typography size={'xl'}>{post.title}</Typography>
        <Typography size={'sm'}>{post.excerpt}</Typography>

        <div className="mt-2 flex gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <div className="mt-4 flex justify-between">
          <div className="flex items-center gap-1">
            <Heart />
            <Typography className="font-bold" size={'sm'}>
              512
            </Typography>
          </div>
          <div className="flex items-center gap-1">
            <MessageSquareText />
            <Typography className="font-bold" size={'sm'}>
              512
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostCard;
