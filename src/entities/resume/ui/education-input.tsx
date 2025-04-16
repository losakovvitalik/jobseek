import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardTitle } from '@/shared/ui/card';
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
import { EDUCATION_TYPE_OPTIONS } from './education-type-select';

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
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div
            className={cn(
              'bg-input flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed p-6',
              {
                'p-2': field?.value?.length !== 0,
              },
            )}
          >
            <Plus className='size-4' /> <Typography>Добавить образование</Typography>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Образование</DialogTitle>
            <EducationForm onSubmit={handleSubmit} />
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <div className="mt-4 flex flex-col gap-2">
        {field?.value?.map((item) => (
          <Card key={item.name}>
            <CardContent>
              <CardTitle>{item.name}</CardTitle>
              <CardDescription className="mt-2">
                {EDUCATION_TYPE_OPTIONS.find((op) => op.value === item.type)?.label},{' '}
                {item.organization}, {item.year}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EducationInput;
