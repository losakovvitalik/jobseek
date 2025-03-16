import Typography from '@/components/ui/typography';
import Image from 'next/image';
import Link from 'next/link';

export interface ConversationProps {}

const Conversation = () => {
  return (
    <Link href={'/messages/1'} className="block border-border border-b py-2.5">
      <div className="grid grid-cols-[48px_1fr] gap-2">
        <Image className='h-12 w-12 rounded-full object-cover' src={'/company-image.png'} alt="" width={50} height={50} />
        <div className=''>
          <Typography className='text-muted-foreground' size={'lg'}>Сбербанк</Typography>
          <Typography className='text-secondary-foreground line-clamp-1'>
            Добрый день, хотели бы узнать свободны ли вы в воскресенье?
          </Typography>
        </div>
      </div>
    </Link>
  );
};

export default Conversation;
