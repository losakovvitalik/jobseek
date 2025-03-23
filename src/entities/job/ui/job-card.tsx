import { Badge } from '@/shared/ui/badge';
import Typography from '@/shared/ui/typography';
import CompanyAvatar from '@/entities/company/ui/company-avatar';
import { cn } from '@/lib/utils';

interface JobCardProps {
  job: {
    title: string;
  };
  className?: string;
}

const JobCard = ({ job, className }: JobCardProps) => {
  return (
    <div className={cn('bg-secondary flex h-full w-full flex-col gap-2 rounded-xl p-4', className)}>
      <Typography size={'3xl'}>{job.title}</Typography>
      <div className="flex gap-3 items-center">
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
    </div>
  );
};

export default JobCard;
