import { Button } from '@/shared/ui/button';
import { Card, CardContent } from '@/shared/ui/card';
import VkIcon from '@/shared/ui/icons/vk-icon';
import Typography from '@/shared/ui/typography';
import { Link, Send } from 'lucide-react';

const CompanyInfoTabsContent = () => {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <CardContent>
          <Typography className="mb-2 font-bold" size={'xl'}>
            Контакты
          </Typography>

          <Typography>Email: sber@test.com</Typography>
          <Typography>Телефон: +7 (777) 777-77-77</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography className="mb-2 font-bold" size={'xl'}>
            О компании
          </Typography>
          <div className="flex gap-1">
            <Typography>Сфера деятельности:</Typography>
            <Typography className="font-bold">IT, Банкинг</Typography>
          </div>
          <div className="flex gap-1">
            <Typography>Год основания</Typography>
            <Typography className="font-bold">1841</Typography>
          </div>
          <div className="flex gap-1">
            <Typography>Количество сотрудников:</Typography>
            <Typography className="font-bold">~250 000+</Typography>
          </div>
          <div className="flex flex-col gap-1">
            <Typography>Ключевые продукты:</Typography>
            <ul className='pl-4 list-disc'>
              <li>Розничный и корпоративный банкинг</li>
              <li>Инвестиционные продукты (СберИнвестор)</li>
              <li>Страхование (СберСтрахование)</li>
              <li>Цифровые сервисы: СберМегаМаркет, Delivery Club, СберЗдоровье</li>
            </ul>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography className="mb-2 font-bold" size={'xl'}>
            Соцсети
          </Typography>
          <div className="mb-2 flex gap-2">
            <Button size={'icon'} className="bg-blue-400">
              <Send className="fill-white stroke-white" />
            </Button>
            <Button size={'icon'} className="bg-blue-400">
              <VkIcon />
            </Button>
            <Button size={'icon'} className="bg-blue-400">
              <Link className="stroke-white" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyInfoTabsContent;
