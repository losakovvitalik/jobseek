import { vacanciesMock } from '@/entities/vacancy/model/vacancy.mock';
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
        {vacanciesMock.map((vacancy) => (
          <CarouselItem key={vacancy.id}>
            <VacancyCard vacancy={vacancy} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default VacancyCarousel;
