import { Button } from '@/shared/ui/button';
import { Card, CardContent } from '@/shared/ui/card';
import PageTitle from '@/shared/ui/page-title';
import Typography from '@/shared/ui/typography';
import { Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <div>
      <PageTitle>Контакты</PageTitle>
      <Card>
        <CardContent>
          <Typography size={'lg'}>
            Если у вас есть какие-то пожелания или предложения по поводу моего проекта, вы всегда
            можете написать мне в телеграм
          </Typography>

          <Button className="mt-2 flex w-full items-center gap-2" asChild>
            <a target="_blank" href="https://t.me/powerofweb">
              <Typography size={'xl'}>Написать</Typography>
              <Send className="fill-primary-foreground stroke-primary-foreground" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactPage;
