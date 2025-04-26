import { Button } from '@/shared/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog';
import { OctagonAlert } from 'lucide-react';
import { PropsWithChildren } from 'react';

const ReportVacancyDialog = ({ children }: PropsWithChildren) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="size-6" size="icon">
          <OctagonAlert className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="px-4">
        <DialogHeader>
          <DialogTitle>Отправить жалобу</DialogTitle>
        </DialogHeader>
        {children}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" className="w-full">
              Отменить
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ReportVacancyDialog;
