import { vacanciesMock } from '@/entities/vacancy/model/vacancy.mock';
import VacancyCard from '@/entities/vacancy/ui/vacancy-card';

const CompanyVacanciesTabsContent = () => {
  return (
    <div className="flex flex-col gap-4">
      {vacanciesMock.map((vacancy) => (
        <VacancyCard key={vacancy.id} vacancy={vacancy} />
      ))}
    </div>
  );
};

export default CompanyVacanciesTabsContent;
