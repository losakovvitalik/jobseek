import Conversation from '@/entities/message/ui/conversation';
import SearchInput from '@/shared/ui/search-input';

const MessagesPage = () => {
  return (
    <div>
      <SearchInput placeholder="Поиск" />
      <div className="mt-2">
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
