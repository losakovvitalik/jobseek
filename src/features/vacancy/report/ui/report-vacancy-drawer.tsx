import { Button } from '@/shared/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/shared/ui/drawer';
import { OctagonAlert } from 'lucide-react';
import { PropsWithChildren } from 'react';

const ReportVacancyDrawer = ({ children }: PropsWithChildren) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="size-6" size="icon">
          <OctagonAlert className="size-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="px-4">
        <DrawerHeader>
          <DrawerTitle>Отправить жалобу</DrawerTitle>
        </DrawerHeader>
        {children}
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline" className="w-full">
              Отменить
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ReportVacancyDrawer;
