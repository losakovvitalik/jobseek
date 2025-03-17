import { Badge } from '@/components/ui/badge';
import Typography from '@/components/ui/typography';
import Image from 'next/image';
import Link from 'next/link';
import { Post } from '../types/post';

export interface PostsCardProps {
  post: Post;
}

const PostsCard = ({ post }: PostsCardProps) => {
  return (
    <Link href={'#'} className="bg-secondary rounded-lg">
      <Image className="w-full rounded-t-lg" src={post.image_url} alt="" width={400} height={200} />

      <div className="px-2 py-4">
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
      </div>
    </Link>
  );
};

export default PostsCard;
