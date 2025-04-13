import NotificationCard from '@/entities/notifications/ui/notification-card';
import PageTitle from '@/shared/ui/page-title';

const NotificationsPage = () => {
  return (
    <div>
      <PageTitle>Уведомления</PageTitle>
      <div className={'flex flex-col gap-4'}>
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
      </div>
    </div>
  );
};

export default NotificationsPage;
