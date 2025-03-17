import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Typography from '@/components/ui/typography';
import { mockNews } from '@/entities/news/mock/news.mock';
import NewsCard from '@/entities/news/ui/news-card';
import { Trophy } from 'lucide-react';
import Image from 'next/image';

const MePage = () => {
  return (
    <div>
      <Typography className="mb-4 text-center" size={'2xl'}>
        Профиль
      </Typography>
      <Card className="bg-secondary">
        <CardContent>
          <div className="flex items-center gap-4">
            <Image
              className="h-20 w-20 rounded-full"
              src={'/avatar-placeholder.png'}
              alt=""
              width={80}
              height={80}
            />
            <div>
              <Typography size={'xl'}>Сергей Витальевич Иванов</Typography>
              <Typography className="text-muted-foreground">Frontend разработчик</Typography>
            </div>
          </div>
        </CardContent>
      </Card>

      <Typography className="mt-6" size={'2xl'}>
        Достижения
      </Typography>
      <Carousel
        className="mx-auto mt-2 w-3/4"
        opts={{
          align: 'end',
          // duration: 20,
        }}
      >
        <CarouselContent>
          <CarouselItem className="basis-[40%]">
            <Card className="flex aspect-square w-full items-center justify-center p-0">
              <CardContent className="p-2">
                <Trophy className="mx-auto mb-1 size-8" />
                <Typography className="text-center" size={'xs'}>
                  Победил в 10 хакатонах!
                </Typography>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="basis-[40%]">
            <Card className="flex aspect-square w-full items-center justify-center p-0">
              <CardContent className="p-2">
                <Trophy className="mx-auto mb-1 size-8" />
                <Typography className="text-center" size={'xs'}>
                  Победил в 10 хакатонах!
                </Typography>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="basis-[40%]">
            <Card className="flex aspect-square w-full items-center justify-center p-0">
              <CardContent className="p-2">
                <Trophy className="mx-auto mb-1 size-8" />
                <Typography className="text-center" size={'xs'}>
                  Победил в 10 хакатонах!
                </Typography>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="basis-[40%]">
            <Card className="flex aspect-square w-full items-center justify-center p-0">
              <CardContent className="p-2">
                <Trophy className="mx-auto mb-1 size-8" />
                <Typography className="text-center" size={'xs'}>
                  Победил в 10 хакатонах!
                </Typography>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="basis-[40%]">
            <Card className="flex aspect-square w-full items-center justify-center p-0">
              <CardContent className="p-2">
                <Trophy className="mx-auto mb-1 size-8" />
                <Typography className="text-center" size={'xs'}>
                  Победил в 10 хакатонах!
                </Typography>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>

      <Tabs defaultValue="info" className="mt-6 w-full">
        <TabsList className="bg-transparent">
          <TabsTrigger
            className="border-input rounded-none border-x-0 border-t-0 border-b-2 bg-transparent dark:data-[state=active]:border-white"
            value="info"
          >
            Информация
          </TabsTrigger>
          <TabsTrigger
            className="border-input rounded-none border-x-0 border-t-0 border-b-2 bg-transparent dark:data-[state=active]:border-white"
            value="post"
          >
            Посты
          </TabsTrigger>
        </TabsList>
        <TabsContent value="info">
          <Typography>Стаж работы: 5 лет</Typography>
          <Typography>Возраст: 26 лет</Typography>
          <Typography>Пол: Мужской</Typography>
          <Typography>Email: losakovvitalik@gmail.com</Typography>
        </TabsContent>
        <TabsContent value="post">
          <div className="flex h-full flex-col gap-4 overflow-auto">
            {mockNews.map((news) => (
              <NewsCard news={news} key={news.id} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MePage;
