'use client';
import CompanyLink from '@/entities/company/ui/company-link';
import usePageTitle from '@/shared/hooks/use-page-title';
import { Card, CardContent } from '@/shared/ui/card';
import Typography from '@/shared/ui/typography';

const VacancyPage = () => {
  usePageTitle('Вакансия');

  return (
    <div>
      <Card>
        <CardContent>
          <Typography className="mb-2 font-bold" size={'2xl'}>
            Front-end разработчик
          </Typography>
          <CompanyLink />
          <Typography className="mt-2 font-semibold" size={'xl'}>
            от 150 000 до 200 000 руб.
          </Typography>

          <Typography className="mt-4" variant={'subtitle'}>
            Информация
          </Typography>
          <div className="mt-2 flex gap-1">
            <Typography>Тип занятости:</Typography>
            <Typography className="font-bold">Полный день</Typography>
          </div>
          <div className="mt-2 flex gap-1">
            <Typography>Формат работы:</Typography>
            <Typography className="font-bold">офис</Typography>
          </div>
          <div className="mt-2 flex gap-1">
            <Typography>Город:</Typography>
            <Typography className="font-bold">Москва</Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VacancyPage;
