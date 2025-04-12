import CompanyLink from '@/entities/company/ui/company-link';
import { Card, CardContent } from '@/shared/ui/card';
import PageTitle from '@/shared/ui/page-title';
import Typography from '@/shared/ui/typography';

const ApplicationsPage = () => {
  return (
    <div>
      <PageTitle>Мои отклики</PageTitle>

      <div className={'flex flex-col gap-4'}>
        <Card>
          <CardContent className={'flex flex-col gap-2'}>
            <CompanyLink />
            <Typography className={'mt-1'}>Резюме: Frontend разработчик</Typography>
            <Typography className={'font-bold'}>На рассмотрении</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent className={'flex flex-col gap-1'}>
            <CompanyLink />
            <Typography className={'mt-1'}>Резюме: Frontend разработчик</Typography>
            <Typography className={'text-destructive-foreground'}>Отказ</Typography>
            <div className={'bg-secondary rounded p-2'}>
              <Typography className={'font-medium'}>Причина отказа</Typography>
              <Typography size={'sm'}>
                Добрый день, к сожалению, набор на эту позицию уже закрыт. Но мы обязательно напишем
                вам, как только у нас появятся свободные вакансии.
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ApplicationsPage;
