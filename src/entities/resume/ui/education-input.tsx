import { cn } from '@/lib/utils';
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
import { ResumeFormSchemaType } from '../model/resume-form-schema';
import { Education } from '../model/types';
import EducationCard from './education-card';
import EducationForm from './education-form';

export interface EducationInputProps {
  field: ControllerRenderProps<ResumeFormSchemaType, 'education'>;
}

const EducationInput = ({ field }: EducationInputProps) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (values: Education) => {
    field.onChange([...(field?.value || []), values]);
    setOpen(false);
  };

  const handleRemoveEducation = (id: string) => {
    field.onChange([...field?.value.filter((v) => v.id !== id)]);
  };

  const handleEditEducation = (education: Education) => {
    field.onChange([...field?.value.map((v) => (education.id === v.id ? education : v))]);
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div
            className={cn(
              'bg-input flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed p-6',
              {
                'p-2': !!field?.value?.length,
              },
            )}
          >
            <Plus className="size-4" /> <Typography>Добавить образование</Typography>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]" onOpenAutoFocus={(e) => e.preventDefault()}>
          <DialogHeader>
            <DialogTitle>Образование</DialogTitle>
            <EducationForm mode="create" onSubmit={handleSubmit} />
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <div className="mt-4 flex flex-col gap-2">
        {field?.value?.map((item) => {
          return (
            <EducationCard
              key={item.name}
              onSubmit={handleEditEducation}
              education={item}
              onRemove={handleRemoveEducation}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EducationInput;
