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
      className={cn('rounded p-2 text-sm', {
        'bg-secondary text-secondary-foreground mr-20': !isMine,
        'bg-primary text-primary-foreground ml-20': isMine,
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
