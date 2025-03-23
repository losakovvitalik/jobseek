import { Card, CardContent } from '@/shared/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import Typography from '@/shared/ui/typography';
import { mockPosts } from '@/entities/post/mock/posts.mock';
import PostWithTopComment from '@/features/post-feed/ui/post-with-top-comment';
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

      <div className="relative mt-6 grid grid-cols-[24px_1fr] gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500">
          <Typography className="font-bold">1</Typography>
        </div>
        <div className="bg-secondary h-6 rounded-2xl">
          <div className="h-6 w-8/12 rounded-2xl bg-orange-500"></div>
          <Typography
            className="absolute top-1/2 left-1/2 -translate-1/2 text-center font-medium"
            size={'sm'}
          >
            400 / 600
          </Typography>
        </div>
      </div>

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
          <TabsTrigger
            className="border-input rounded-none border-x-0 border-t-0 border-b-2 bg-transparent dark:data-[state=active]:border-white"
            value="settings"
          >
            Настройки
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
            {mockPosts.map((post) => (
              <PostWithTopComment post={post} key={post.id} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="settings">
          Настройки профиля, будут видны только при просмотре своего профиля
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MePage;
