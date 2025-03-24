import { Card, CardContent } from '@/shared/ui/card';
import Comment from '@/entities/comment/ui/comment';
import PostCard, { PostCardProps } from '@/entities/post/ui/post-card';

export interface PostWithTopCommentProps extends Pick<PostCardProps, 'post'> {}

const PostWithTopComment = ({ post }: PostWithTopCommentProps) => {
  return (
    <Card>
      <CardContent>
        <PostCard className="p-0" post={post} />
        <div className="bg-accent mx-auto my-4 h-0.5 w-11/12 rounded" />
        <Comment />
      </CardContent>
    </Card>
  );
};

export default PostWithTopComment;
