import { paths } from '@/lib/paths';
import { Button } from '@/shared/ui/button';
import Typography from '@/shared/ui/typography';
import { Search } from 'lucide-react';
import Link from 'next/link';

const VacanciesListEnd = () => {
  return (
    <div className="flex flex-col">
      <Typography className='max-w-xs text-center'>Вы просмотрели все рекомендованные вакансии на сегодня</Typography>
      <Button asChild className="mt-2">
        <Link href={paths.searchLink}>
          <Search /> Поиск
        </Link>
      </Button>
    </div>
  );
};

export default VacanciesListEnd;
