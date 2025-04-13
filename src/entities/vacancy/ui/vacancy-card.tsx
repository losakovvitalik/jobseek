import CompanyAvatar from '@/entities/company/ui/company-avatar';
import CompanyPartnerIcon from '@/entities/company/ui/company-partner-icon';
import { paths } from '@/lib/paths';
import { Button } from '@/shared/ui/button';
import { Card, CardContent } from '@/shared/ui/card';
import Typography from '@/shared/ui/typography';
import Link from 'next/link';

const VacancyCard = () => {
  return (
    <Card className="h-full w-full">
      <CardContent>
        <Link href={paths.companies.single('34')} className="flex items-center">
          <CompanyAvatar size={'xs'} src="/company-placeholder.png" />
          <Typography size={'default'} className="mr-1 ml-2 font-semibold">
            Сбербанк
          </Typography>
          <CompanyPartnerIcon className="size-4" />
        </Link>
        <Link href={paths.vacancies.single('34')}>
          <Typography size={'lg'} className="mt-1 font-bold underline">
            Frontend Разработчик
          </Typography>
        </Link>

        <Typography className="text-muted-foreground mt-2" size={'xs'}>
          Ищем старшего разработчик в новую команду. Нужно будет заниматься проектирование
          архитектуры проекта, код-ревью, написание автоматических тестов
        </Typography>

        <div className="mt-4 flex items-center justify-between">
          <Typography size={'lg'} className="font-bold">
            От 120 000 ₽
          </Typography>
          <Button size={'sm'}>Откликнуться</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VacancyCard;
