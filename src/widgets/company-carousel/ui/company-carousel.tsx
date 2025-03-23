import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/carousel';
import CompanyCard from '@/entities/company/ui/company-card';
import { cn } from '@/lib/utils';

export interface CompanyCarouselProps {
  className?: string;
}

const CompanyCarousel = ({className}: CompanyCarouselProps) => {
  return (
    <Carousel className={cn("mx-auto w-9/12", className)}>
      <CarouselContent>
        <CarouselItem>
          <CompanyCard />
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

export default CompanyCarousel;
