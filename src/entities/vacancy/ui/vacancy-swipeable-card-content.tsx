import CompanyLink from '@/entities/company/ui/company-link';
import FavoriteVacancyButton from '@/features/vacancy/favorite/ui/favorite-vacancy-button';
import ReportVacancyButton from '@/features/vacancy/report/ui/report-vacancy-button';
import { paths } from '@/lib/paths';
import { cn } from '@/lib/utils';
import { Badge } from '@/shared/ui/badge';
import { buttonVariants } from '@/shared/ui/button';
import Typography from '@/shared/ui/typography';
import Link from 'next/link';
import { Vacancy } from '../model/types';

export interface VacancySwipeableCardContentProps {
  vacancy: Vacancy;
  className?: string;
}

const VacancySwipeableCardContent = ({ vacancy, className }: VacancySwipeableCardContentProps) => {
  const { title, city, description, experience, price_from, price_to, skills } = vacancy;

  return (
    <div
      className={cn(
        'bg-background flex h-full w-full max-w-lg flex-col gap-2 rounded-xl p-4',
        className,
      )}
    >
      <div className="flex justify-between">
        <Typography size={'3xl'}>{title}</Typography>
        <ReportVacancyButton />
      </div>
      <CompanyLink />
      <Typography size={'lg'}>
        {price_from}₽ - {price_to}₽
      </Typography>
      <Typography>Опыт работы: {experience.label}</Typography>
      <Typography>Город: {city.label}</Typography>

      <Typography className="line-clamp-4">Описание: {description}</Typography>
      <ul className="mt-4 flex flex-wrap gap-1">
        {skills.map((skill) => (
          <Badge asChild key={skill.label}>
            <li>{skill.label}</li>
          </Badge>
        ))}
      </ul>
      <div className={'mt-4 grid grid-cols-[1fr_auto] gap-2'}>
        <Link
          className={buttonVariants({
            size: 'sm',
          })}
          href={paths.vacancies.single('34')}
        >
          Подробнее
        </Link>
        <FavoriteVacancyButton size={'sm'} />
      </div>
    </div>
  );
};

export default VacancySwipeableCardContent;
