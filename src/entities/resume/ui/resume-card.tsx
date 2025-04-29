import TagsList from '@/entities/tag/ui/tags-list';
import { paths } from '@/lib/paths';
import { Button } from '@/shared/ui/button';
import { Card, CardContent } from '@/shared/ui/card';
import Typography from '@/shared/ui/typography';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import Link from 'next/link';
import { Resume } from '../model/types';

export interface ResumeCardProps {
  resume: Resume;
}

const ResumeCard = ({ resume }: ResumeCardProps) => {
  const { name, description, skills, created_at, id } = resume;

  return (
    <Card>
      <CardContent>
        <Typography variant={'subtitle'}>{name}</Typography>
        <Typography className={'line-clamp-3'} variant={'muted'}>
          {description}
        </Typography>
        <TagsList tags={skills} />
        <div className={'mt-4 flex flex-col gap-2 justify-between'}>
          <div className="flex gap-1">
            <Typography variant={'muted'}>Создано</Typography>
            <Typography>
              {format(created_at, 'd MMMM yyyy', {
                locale: ru,
              })}
            </Typography>
          </div>
          <Button size={'sm'} asChild>
            <Link href={paths.resumes.edit(id)}>Редактировать</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResumeCard;
