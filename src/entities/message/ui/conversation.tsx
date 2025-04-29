import { paths } from '@/lib/paths';
import Typography from '@/shared/ui/typography';
import Image from 'next/image';
import Link from 'next/link';

export interface ConversationProps {}

const Conversation = () => {
  return (
    <Link href={paths.chat.single('34')} className="border-border block border-t py-2.5">
      <div className="grid grid-cols-[48px_1fr] gap-2">
        <Image
          className="h-12 w-12 rounded-full object-cover"
          src={'/company-placeholder.png'}
          alt=""
          width={50}
          height={50}
        />
        <div>
          <Typography className="text-muted-foreground" size={'lg'}>
            Сбербанк
          </Typography>
          <Typography className="text-secondary-foreground line-clamp-1">
            Добрый день, хотели бы узнать свободны ли вы в воскресенье?
          </Typography>
        </div>
      </div>
    </Link>
  );
};

export default Conversation;
