import AchievementCard from "@/components/achievement/ui/achievement-card";
import { Carousel, CarouselContent, CarouselItem } from "@/shared/ui/carousel";

const AchievementsCarousel = () => {
  return (
    <Carousel
      className="mx-auto mt-2 cursor-grab active:cursor-grabbing"
      opts={{
        align: 'end',
      }}
    >
      <CarouselContent>
        <CarouselItem className="basis-[40%]">
          <AchievementCard />
        </CarouselItem>
        <CarouselItem className="basis-[40%]">
          <AchievementCard />
        </CarouselItem>
        <CarouselItem className="basis-[40%]">
          <AchievementCard />
        </CarouselItem>
        <CarouselItem className="basis-[40%]">
          <AchievementCard />
        </CarouselItem>
        <CarouselItem className="basis-[40%]">
          <AchievementCard />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default AchievementsCarousel;
