import { Card, CardContent } from '@/shared/ui/card';
import { Separator } from '@/shared/ui/separator';
import Typography from '@/shared/ui/typography';
import { Star } from 'lucide-react';
import Image from 'next/image';

const ReviewCard = () => {
  return (
    <Card>
      <CardContent>
        <div className="my-1 flex items-center gap-1">
          <Image
            className="h-6 w-6 rounded-full object-cover"
            src={`/avatar-placeholder.png`}
            alt=""
            width={48}
            height={48}
          />
          <Typography className="font-medium">Иван Петров</Typography>
        </div>

        <div className="flex gap-1 items-center">
          <div className="flex items-center gap-0.5">
            <Typography className="font-bold">5</Typography>
            <Star className="size-4 fill-yellow-400 stroke-yellow-400" />
          </div>
          <Separator orientation="vertical" className='!h-5' />
          <Typography className='text-muted-foreground'>Главный менеджер по продажам</Typography>
        </div>

        <Typography className='mt-2' size={'sm'}>
          Работаю в Сбербанке уже 3 года, начинал с должности менеджера по продажам. Компания даёт
          отличные возможности для роста: регулярные тренинги, корпоративный университет, поддержка
          в получении дополнительного образования.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
