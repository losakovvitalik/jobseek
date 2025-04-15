import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog';
import Typography from '@/shared/ui/typography';
import { Plus } from 'lucide-react';
import { ControllerRenderProps } from 'react-hook-form';
import EducationForm from './education-form';

export interface EducationInputProps {
  field: ControllerRenderProps<any>;
}

const EducationInput = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed p-6">
          <Plus /> <Typography>Добавить образование</Typography>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Образование</DialogTitle>
          <EducationForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EducationInput;
