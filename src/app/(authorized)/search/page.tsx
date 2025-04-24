import SearchInput from '@/shared/ui/search-input';
import Typography from '@/shared/ui/typography';
import CompanyCarousel from '@/widgets/company-carousel/ui/company-carousel';
import VacancyCarousel from '@/widgets/vacancy-carousel/ui/vacancy-carousel';

const SearchPage = () => {
  return (
    <div>
      <SearchInput />
      <div className="mt-8 px-1">
        <Typography className="font-bold" size={'xl'}>
          Рекомендуемые компании
        </Typography>
        <CompanyCarousel className="mt-2" />
      </div>
      <div className="mt-6">
        <Typography className="font-bold" size={'xl'}>
          Рекомендуемые вакансии
        </Typography>
        <VacancyCarousel className="mt-2" />
      </div>
      <div className="mt-6">
        <Typography className="font-bold" size={'xl'}>
          Рекомендуемые компании
        </Typography>
        <CompanyCarousel className="mt-2" />
      </div>
    </div>
  );
};

export default SearchPage;
