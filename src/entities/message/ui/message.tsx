import { cn } from '@/lib/utils';
import Typography from '@/shared/ui/typography';
import { dateToUserString } from '@/shared/utils/date-to-user-string';
import { Check, CheckCheck } from 'lucide-react';

export interface MessageProps {
  text: string;
  isMine: boolean;
  isRead: boolean;
  createdAt: Date | string
}

const Message = ({ text, isMine, isRead, createdAt }: MessageProps) => {

  return (
    <div
      className={cn('rounded p-2 text-sm w-10/12 max-w-lg', {
        'bg-secondary text-secondary-foreground mr-auto': !isMine,
        'bg-primary text-primary-foreground ml-auto': isMine,
      })}
    >
      <Typography>{text}</Typography>
      <div className='flex justify-between items-center'>
        <Typography variant={'muted'} size={'xs'}>
          {dateToUserString(createdAt)}
        </Typography>
        {isRead ? <CheckCheck className='size-4' /> : <Check className='size-4' />}
      </div>
    </div>
  );
};

export default Message;
