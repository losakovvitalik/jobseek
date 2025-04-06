'use client';
import { Button, buttonVariants } from '@/shared/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/shared/ui/drawer';
import { Label } from '@/shared/ui/label';
import { RadioGroup, RadioGroupItem } from '@/shared/ui/radio-group';
import { Textarea } from '@/shared/ui/textarea';
import { OctagonAlert } from 'lucide-react';

export interface ReportVacancyButtonProps {
  className?: string;
}

const ReportVacancyButton = ({ className }: ReportVacancyButtonProps) => {
  return (
    <div className={className}>
      <Drawer>
        <DrawerTrigger>
          <OctagonAlert className="size-4" />
        </DrawerTrigger>
        <DrawerContent className="px-4">
          <DrawerHeader>
            <DrawerTitle>Отправить жалобу</DrawerTitle>
          </DrawerHeader>
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
                <Label htmlFor="option-three">Неточная информацияация</Label>
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
              placeholder="Опишите ситуацию более детально. Это поможет поддержки оперативно решить проблему."
            />
          </div>
          <DrawerFooter>
            <Button>Отправить</Button>
            <DrawerClose>
              <div
                className={buttonVariants({
                  className: 'w-full',
                  variant: 'outline',
                })}
              >
                Отменить
              </div>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default ReportVacancyButton;
