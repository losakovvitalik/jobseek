'use client';
import { useIsDesktop } from '@/shared/hooks/use-is-desktop';
import { Button } from '@/shared/ui/button';

import { Label } from '@/shared/ui/label';
import { RadioGroup, RadioGroupItem } from '@/shared/ui/radio-group';
import { Textarea } from '@/shared/ui/textarea';
import ReportVacancyDialog from './report-vacancy-dialog';
import ReportVacancyDrawer from './report-vacancy-drawer';

export interface ReportVacancyButtonProps {
  className?: string;
}

const ReportVacancyButton = ({ className }: ReportVacancyButtonProps) => {
  const isDesktop = useIsDesktop();

  const Content = (
    <>
      <div>
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one">Неактуальная информация</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">Оскорбительное содержание</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-three" id="option-three" />
            <Label htmlFor="option-three">Неточная информация</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-four" id="option-four" />
            <Label htmlFor="option-four">Рекламный характер</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-five" id="option-five" />
            <Label htmlFor="option-five">Другое</Label>
          </div>
        </RadioGroup>
        <Textarea
          className="mt-4"
          placeholder="Опишите ситуацию более детально. Это поможет поддержке оперативно решить проблему."
        />
      </div>
      <div className="mt-4">
        <Button className='w-full'>Отправить</Button>
      </div>
    </>
  );

  return (
    <div className={className}>
      {isDesktop ? (
        <ReportVacancyDialog>{Content}</ReportVacancyDialog>
      ) : (
        <ReportVacancyDrawer>{Content}</ReportVacancyDrawer>
      )}
    </div>
  );
};

export default ReportVacancyButton;
