import TagsList from '@/entities/tag/ui/tags-list';
import { paths } from '@/lib/paths';
import { Button } from '@/shared/ui/button';
import { Card, CardContent } from '@/shared/ui/card';
import Typography from '@/shared/ui/typography';
import Link from 'next/link';

const ResumeCard = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant={'subtitle'}>Frontend разработчик</Typography>
        <Typography className={'line-clamp-3'} variant={'muted'}>
          Frontend разработчик с опытом работы более 3 лет в разработке и поддержке веб-приложений.
          Стремлюсь использовать лучшие практики и современные технологии для создания качественных
          и удобных пользовательских интерфейсов.
        </Typography>
        <TagsList
          tags={[
            'HTML5',
            'CSS3',
            'JavaScript (ES6+)',
            'TypeScript',
            'React',
            'Vue.js',
            'Angular',
            'jQuery',
          ]}
        />
        <div className={'mt-4 flex items-center justify-between'}>
          <Typography variant={'muted'}>Создано 12 август</Typography>
          <Button size={'sm'} asChild>
            <Link href={paths.resumes.edit('2')}>Редактировать</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResumeCard;
