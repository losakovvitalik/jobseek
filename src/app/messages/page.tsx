import { SearchInput } from '@/components/ui/input';
import Typography from '@/components/ui/typography';
import Conversation from '@/entities/message/ui/conversation';

const MessagesPage = () => {
  return (
    <div>
      <Typography className="pb-2 text-center" size={'2xl'}>
        Сообщения
      </Typography>
      <SearchInput className="mt-2" placeholder="Поиск" />
      <div className='mt-2'>
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
      </div>
    </div>
  );
};

export default MessagesPage;
