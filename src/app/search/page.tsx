import Typography from '@/shared/ui/typography';
import CompanyCarousel from '@/widgets/company-carousel/ui/company-carousel';
import GlobalSearchInput from '@/widgets/global-search/ui/global-search-input';

const SearchPage = () => {
  return (
    <div className='h-full grid grid-cols-1 grid-rows-[auto_1fr]'>
      <GlobalSearchInput />

      <div className='flex flex-col justify-between h-full py-6'>
        <div className="">
          <Typography className="font-bold" size={'xl'}>
            Рекомендуемые компании
          </Typography>
          <CompanyCarousel className="mt-2" />
        </div>
        <div className="mt-6">
          <Typography className="font-bold" size={'xl'}>
            Рекомендуемые компании
          </Typography>
          <CompanyCarousel className="mt-2" />
        </div>
        <div className="mt-6">
          <Typography className="font-bold" size={'xl'}>
            Рекомендуемые компании
          </Typography>
          <CompanyCarousel className="mt-2" />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
