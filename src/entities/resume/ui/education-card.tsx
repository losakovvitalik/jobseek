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
import { Edit } from 'lucide-react';
import { useState } from 'react';
import { Education } from '../model/types';
import getDescriptionFromEducation from '../utils/getDescriptionFromEducation';
import EducationForm, { EducationFormEditProps } from './education-form';

export interface EducationCardProps extends Pick<EducationFormEditProps, 'onSubmit' | 'onRemove'> {
  education: Education;
}

const EducationCard = ({ education, onRemove, onSubmit }: EducationCardProps) => {
  const [open, setOpen] = useState(false);
  const cardDescription = getDescriptionFromEducation(education);

  const handleSubmit = async (data: Education) => {
    await onSubmit(data);
    setOpen(false);
  };

  const handleRemove = async (id: string) => {
    await onRemove(id);
    setOpen(false);
  };

  return (
    <Card key={education.name}>
      <CardContent>
        <div className="grid grid-cols-[1fr_auto] items-center gap-4">
          <div>
            <Typography className="font-semibold">{education.name}</Typography>
            {cardDescription && <CardDescription>{cardDescription}</CardDescription>}
          </div>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <div
                className={cn(
                  'bg-input flex cursor-pointer items-center justify-center gap-2 rounded-xl',
                )}
              >
                <Button type="button" size={'icon'}>
                  <Edit />
                </Button>
              </div>
            </DialogTrigger>
            <DialogContent onOpenAutoFocus={(e) => e.preventDefault()} className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Образование</DialogTitle>
                <EducationForm
                  mode="edit"
                  defaultValues={{ ...education }}
                  onSubmit={handleSubmit}
                  onRemove={handleRemove}
                />
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
};

export default EducationCard;
