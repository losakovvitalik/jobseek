import CompanyLink from '@/entities/company/ui/company-link';
import Message from '@/entities/message/ui/message';
import SendMessageInput from '@/features/send-message/ui/send-message-input';
import PageTitle from '@/shared/ui/page-title';

const ChatPage = () => {
  return (
    <>
      <PageTitle>
        <CompanyLink />
      </PageTitle>

      <div className="grid h-full grid-rows-[1fr_auto]">
        <div className="flex flex-col gap-2">
          <Message
            text="Добрый день, мы ищем frontend разработчика в нашу команду. Видели ваше резюме. Не хотите попробовать себя на этой позиции?"
            isMine={false}
            isRead={true}
            createdAt={'2025-04-13 17:59:43'}
          />

          <Message
            text="Добрый день, да, я сейчас в поиске. Для начала можно подробнее про вакансию?"
            isMine={true}
            isRead={false}
            createdAt={'2025-04-13 18:29:43'}
          />
        </div>
        <SendMessageInput />
      </div>
    </>
  );
};

export default ChatPage;
