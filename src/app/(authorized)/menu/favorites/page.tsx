import { vacanciesMock } from '@/entities/vacancy/model/vacancy.mock';
import VacancyCard from '@/entities/vacancy/ui/vacancy-card';
import PageTitle from '@/shared/ui/page-title';

const FavoritesPage = () => {
  return (
    <div>
      <PageTitle>Избранное</PageTitle>
      <div className={'flex flex-col gap-4'}>
        {vacanciesMock.map((vacancy) => (
          <VacancyCard key={vacancy.id} vacancy={vacancy} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
