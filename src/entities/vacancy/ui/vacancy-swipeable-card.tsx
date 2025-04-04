import CompanyAvatar from '@/entities/company/ui/company-avatar';
import ReportVacancyButton from '@/features/vacancy/report/ui/report-vacancy-button';
import { cn } from '@/lib/utils';
import { Badge } from '@/shared/ui/badge';
import { Button } from '@/shared/ui/button';
import Typography from '@/shared/ui/typography';

interface JobCardProps {
  job: {
    title: string;
  };
  className?: string;
}

const VacancySwipeableCard = ({ job, className }: JobCardProps) => {
  return (
    <div className={cn('bg-secondary flex h-full w-full flex-col gap-2 rounded-xl p-4', className)}>
      <div className="flex justify-between">
        <Typography size={'3xl'}>{job.title}</Typography>
        <ReportVacancyButton />
      </div>
      <div className="flex items-center gap-3">
        <CompanyAvatar src="/company-placeholder.png" />
        <Typography size={'xl'}>Сбербанк</Typography>
      </div>
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
      <Button>Подробнее</Button>
    </div>
  );
};

export default VacancySwipeableCard;
