import CompanyAvatar from '@/entities/company/ui/company-avatar';
import CompanyPartnerIcon from '@/entities/company/ui/company-partner-icon';
import { paths } from '@/lib/paths';
import { Button } from '@/shared/ui/button';
import { Card, CardContent } from '@/shared/ui/card';
import Typography from '@/shared/ui/typography';
import Link from 'next/link';
import { Vacancy } from '../model/types';

export interface VacancyCardProps {
  vacancy: Vacancy;
}

const VacancyCard = ({ vacancy }: VacancyCardProps) => {
  const { title, description, price_from, price_to } = vacancy;

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
            {title}
          </Typography>
        </Link>

        <Typography className="text-muted-foreground mt-2" size={'xs'}>
          {description}
        </Typography>

        <div className="my-4 flex flex-wrap items-center gap-2 first-letter:uppercase">
          {price_from && (
            <Typography size={'lg'} className="font-bold">
              oт {price_from}₽
            </Typography>
          )}
          {price_to && (
            <Typography size={'lg'} className="font-bold">
              до {price_to}₽
            </Typography>
          )}
        </div>
        <Button size={'sm'}>Откликнуться</Button>
      </CardContent>
    </Card>
  );
};

export default VacancyCard;
