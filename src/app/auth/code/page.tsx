import OtpForm from '@/features/one-time-password/ui/otp-form';
import Typography from '@/shared/ui/typography';

const AuthCodePage = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="mb-[5%] px-6">
        <Typography className="text-center" variant={'subtitle'}>
          Введите код из email
        </Typography>
        <Typography className="mt-2 text-center" variant={'muted'} size={'sm'}>
          Мы отправили сообщение с четырехзначным кодом на вашу почту
        </Typography>
        <OtpForm />
      </div>
    </div>
  );
};

export default AuthCodePage;
