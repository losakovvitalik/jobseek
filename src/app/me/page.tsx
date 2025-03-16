import { Card, CardContent } from '@/components/ui/card';
import Typography from '@/components/ui/typography';
import Image from 'next/image';

const MePage = () => {
  return (
    <div>
      <Typography className="pb-2 text-center" size={'2xl'}>
        Профиль
      </Typography>
      <Card className='bg-secondary'>
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
    </div>
  );
};

export default MePage;
