import CompanyAvatar from '@/entities/company/ui/company-avatar';
import CompanyPartnerIcon from '@/entities/company/ui/compnay-partner-icon';
import { Button } from '@/shared/ui/button';
import { Card, CardContent } from '@/shared/ui/card';
import Typography from '@/shared/ui/typography';

const VacancyCard = () => {
  return (
    <Card className="h-full w-full">
      <CardContent>
        <div className="flex items-center">
          <CompanyAvatar size={'xs'} src="/company-placeholder.png" />
          <Typography size={'default'} className="mr-1 ml-2 font-semibold">
            Сбербанк
          </Typography>
          <CompanyPartnerIcon className="size-4" />
        </div>
        <Typography size={'lg'} className="mt-1 font-bold">
          Frontend Разработчик
        </Typography>

        <Typography className="text-muted-foreground mt-2" size={'xs'}>
          Ищем старшего разработчик в новую команду. Нужно будет заниматься проектирование
          архитектуры проекта, код-ревью, написание автоматических тестов
        </Typography>

        <div className="flex items-center justify-between mt-4">
          <Typography size={'lg'} className='font-bold'>От 120 000 ₽</Typography>
          <Button size={'sm'}>
            Откликнуться
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VacancyCard;
