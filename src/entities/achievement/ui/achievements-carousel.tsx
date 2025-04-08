import AchievementCard from '@/entities/achievement/ui/achievement-card';
import { Carousel, CarouselContent, CarouselItem } from '@/shared/ui/carousel';

const AchievementsCarousel = () => {
  return (
    <div className={'w-[calc(100vw-16px)]'}>
      <Carousel
        className="mt-2 cursor-grab active:cursor-grabbing"
        opts={{
          align: 'end',
        }}
      >
        <CarouselContent>
          <CarouselItem className="basis-1/3">
            <AchievementCard />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <AchievementCard />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <AchievementCard />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <AchievementCard />
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <AchievementCard />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default AchievementsCarousel;
