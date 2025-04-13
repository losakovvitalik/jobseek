import Typography from '@/shared/ui/typography';

const NotificationCard = () => {
  return (
    <div className={'bg-secondary p-2 rounded text-lg font-medium'}>
      <Typography>
        У вас есть непрочитанные сообщения. Проверьте, вдруг там что-то важное.
      </Typography>
      <Typography className={'mt-2'} variant={'muted'} size={'xs'}>
        Отправлено в 11:36
      </Typography>
    </div>
  );
};

export default NotificationCard;
