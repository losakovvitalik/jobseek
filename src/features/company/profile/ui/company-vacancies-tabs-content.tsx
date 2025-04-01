import VacancyCard from '@/entities/vacancy/ui/vacancy-card';

const CompanyVacanciesTabsContent = () => {
  return (
    <div className="flex flex-col gap-4">
      <VacancyCard />
      <VacancyCard />
      <VacancyCard />
      <VacancyCard />
      <VacancyCard />
    </div>
  );
};

export default CompanyVacanciesTabsContent;
