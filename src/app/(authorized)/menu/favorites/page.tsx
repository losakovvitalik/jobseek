import VacancyCard from '@/entities/vacancy/ui/vacancy-card';
import PageTitle from '@/shared/ui/page-title';

const FavoritesPage = () => {
  return (
    <div>
      <PageTitle>Избранное</PageTitle>
      <div className={'flex flex-col gap-4'}>
        <VacancyCard />
        <VacancyCard />
        <VacancyCard />
        <VacancyCard />
      </div>
    </div>
  );
};

export default FavoritesPage;
