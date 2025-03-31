import CompanyCard from '@/entities/company/ui/company-card';
import VacancyCard from '@/entities/vacancy/ui/vacancy-card';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/carousel';

export interface VacancyCarouselProps {
  className?: string;
}

const VacancyCarousel = ({ className }: VacancyCarouselProps) => {
  return (
    <Carousel className={cn('mx-auto w-9/12', className)}>
      <CarouselContent>
        <CarouselItem>
          <VacancyCard />
        </CarouselItem>
        <CarouselItem>
          <CompanyCard />
        </CarouselItem>
        <CarouselItem>
          <CompanyCard />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default VacancyCarousel;
