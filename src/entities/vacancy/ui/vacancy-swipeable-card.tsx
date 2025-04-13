import CompanyLink from '@/entities/company/ui/company-link';
import FavoriteVacancyButton from '@/features/vacancy/favorite/ui/favorite-vacancy-button';
import ReportVacancyButton from '@/features/vacancy/report/ui/report-vacancy-button';
import { paths } from '@/lib/paths';
import { cn } from '@/lib/utils';
import { Badge } from '@/shared/ui/badge';
import { buttonVariants } from '@/shared/ui/button';
import Typography from '@/shared/ui/typography';
import Link from 'next/link';

interface JobCardProps {
  job: {
    title: string;
  };
  className?: string;
}

const VacancySwipeableCard = ({ job, className }: JobCardProps) => {
  return (
    <div
      className={cn('bg-background flex h-full w-full flex-col gap-2 rounded-xl p-4', className)}
    >
      <div className="flex justify-between">
        <Typography size={'3xl'}>{job.title}</Typography>
        <ReportVacancyButton />
      </div>
      <CompanyLink />
      <Typography size={'lg'}>40 000₽ - 80 000₽</Typography>
      <Typography>Опыт работы: любой</Typography>
      <Typography>Город: Москва</Typography>

      <Typography>
        Описание: Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod sit aliquid
        quia adipisci, maiores perferendis blanditiis, hic est quae dolorum cumque iure vero, velit
        eius cupiditate pariatur recusandae. Optio fuga magnam maiores reiciendis delectus facilis
        consectetur laboriosam vero consequatur.
      </Typography>
      <div className="mt-2 flex flex-wrap gap-1">
        <Badge>JavaScript</Badge>
        <Badge>TypeScript</Badge>
        <Badge>React</Badge>
        <Badge>NextJs</Badge>
        <Badge>Tailwind</Badge>
        <Badge>FSD</Badge>
      </div>
      <div className={'flex justify-end gap-2 mt-2'}>
        <FavoriteVacancyButton size={'sm'} />
        <Link
          className={buttonVariants({
            size: 'sm',
          })}
          href={paths.vacancies.single('34')}
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
};

export default VacancySwipeableCard;
