import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog';
import Typography from '@/shared/ui/typography';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { EducationFormSchemaType } from '../model/education-form-schema';
import { ResumeFormSchemaType } from '../model/resume-form-schema';
import EducationForm from './education-form';

export interface EducationInputProps {
  field: ControllerRenderProps<ResumeFormSchemaType, 'education'>;
}

const EducationInput = ({ field }: EducationInputProps) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (values: EducationFormSchemaType) => {
    field.onChange([...(field?.value || []), values]);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="bg-input flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed p-6">
          <Plus /> <Typography>Добавить образование</Typography>
        </div>
      </DialogTrigger>
      {field?.value?.map((item) => item.name)}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Образование</DialogTitle>
          <EducationForm onSubmit={handleSubmit} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EducationInput;
