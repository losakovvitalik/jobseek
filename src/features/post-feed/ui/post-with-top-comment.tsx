import CommentCard from '@/entities/comment/ui/comment-card';
import PostCard, { PostCardProps } from '@/entities/post/ui/post-card';
import { Card, CardContent } from '@/shared/ui/card';

export interface PostWithTopCommentProps extends Pick<PostCardProps, 'post'> {}

const PostWithTopComment = ({ post }: PostWithTopCommentProps) => {
  return (
    <Card>
      <CardContent>
        <PostCard className="p-0" post={post} />
        <div className="bg-accent mx-auto my-4 h-0.5 w-11/12 rounded" />
        <CommentCard comment={post.top_comment} />
      </CardContent>
    </Card>
  );
};

export default PostWithTopComment;
