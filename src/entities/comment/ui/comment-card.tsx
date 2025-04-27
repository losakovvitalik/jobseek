import Typography from '@/shared/ui/typography';
import Image from 'next/image';
import { Comment } from '../model/type';

export interface CommentCardProps {
  comment: Comment;
}

const CommentCard = ({ comment }: CommentCardProps) => {
  return (
    <div className="flex gap-2">
      <Image
        className="h-6 w-6"
        src={comment.user.photo?.url || '/avatar-placeholder.png'}
        alt=""
        width={24}
        height={24}
      />
      <div>
        <Typography size={'xs'}>{comment.user.name}</Typography>
        <Typography size={'sm'}>{comment.text}</Typography>
      </div>
    </div>
  );
};

export default CommentCard;
