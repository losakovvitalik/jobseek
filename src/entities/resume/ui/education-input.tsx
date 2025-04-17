import { cn } from '@/lib/utils';
import { Button } from '@/shared/ui/button';
import { Card, CardContent, CardDescription } from '@/shared/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog';
import Typography from '@/shared/ui/typography';
import { Plus, Trash } from 'lucide-react';
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

  const handleRemoveEducation = (value: string) => {
    field.onChange([...field?.value.filter((v) => v.name !== value)]);
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
            <Plus className="size-4" /> <Typography>Добавить образование</Typography>
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
        {field?.value?.map((item) => {
          const cardDescription = [
            EDUCATION_TYPE_OPTIONS.find((op) => op.value === item.type)?.label,
            item.organization,
            item.year,
          ]
            .filter((v) => v)
            .join(', ');

          return (
            <Card key={item.name}>
              <CardContent>
                <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                  <div>
                    <Typography className="font-semibold">{item.name}</Typography>
                    {cardDescription && <CardDescription>{cardDescription}</CardDescription>}
                  </div>

                  <Button
                    onClick={() => handleRemoveEducation(item.name)}
                    variant={'destructive'}
                    size={'icon'}
                  >
                    <Trash />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default EducationInput;
