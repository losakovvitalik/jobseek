import { Badge } from '@/components/ui/badge';
import Typography from '@/components/ui/typography';

const JobCard = () => {
  return (
    <div className="bg-secondary mx-auto mt-2 flex h-full w-11/12 flex-col gap-2 rounded-xl p-4">
      <Typography>Стажер / Frontend Специалист</Typography>
      <Typography>Зарплата: 40 000 ₽</Typography>
      <Typography>Опыт работы: любой</Typography>
      <Typography>Компания: ООО TestCompany</Typography>
      <Typography>Город: Москва</Typography>

      <Typography>
        Описание: Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod sit aliquid
        quia adipisci, maiores perferendis blanditiis, hic est quae dolorum cumque iure vero, velit
        eius cupiditate pariatur recusandae. Optio fuga magnam maiores reiciendis delectus facilis
        consectetur laboriosam vero consequatur.
      </Typography>
      <div className="flex flex-wrap gap-1 mt-2">
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
