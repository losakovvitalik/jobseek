import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog';
import Typography from '@/shared/ui/typography';
import { Edit, Plus } from 'lucide-react';
import { useState } from 'react';
import StringHelper from '../utils/string-helper';
import { Button } from './button';
import { Card, CardContent } from './card';

interface BaseProps<T> {
  onSubmit: (values: T) => void | Promise<void>;
}

interface CreateProps<T> extends BaseProps<T> {
  mode: 'create';
}

interface EditProps<T> extends BaseProps<T> {
  mode: 'edit';
  defaultValues: T;
  onRemove: (id: string) => void | Promise<void>;
}

export type ListInputFormProps<T> = CreateProps<T> | EditProps<T>;

export interface ListInputProps<T> {
  value?: T[];
  onChange: (value: T[]) => void;
  renderForm: (props: ListInputFormProps<T>) => React.ReactNode;
  renderCard: (value: T) => React.ReactNode;
  entityName: string;
}

export const ListInput = <T extends { id: string | number }>({
  value,
  entityName,
  onChange,
  renderForm,
  renderCard,
}: ListInputProps<T>) => {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const handleSubmit = (newValue: T) => {
    onChange([...(value || []), newValue]);
    setOpen(false);
  };

  const handleRemove = (id: string) => {
    onChange([...(value?.filter((v) => v.id !== id) || [])]);
  };

  const handleEdit = (item: T) => {
    onChange([...(value?.map((v) => (item.id === v.id ? item : v)) || [])]);
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div
            className={cn(
              'bg-input flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed p-4',
              {
                'p-2': !!value?.length,
              },
            )}
          >
            <Plus className="size-4" /> <Typography>Добавить {entityName}</Typography>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]" onOpenAutoFocus={(e) => e.preventDefault()}>
          <DialogTitle>{StringHelper.capitalizeFirstLetter(entityName)}</DialogTitle>

          {renderForm({
            mode: 'create',
            onSubmit: handleSubmit,
          })}
        </DialogContent>
      </Dialog>

      <div className="mt-4 flex flex-col gap-2">
        {value?.map((item) => {
          return (
            <Card key={item.id}>
              <CardContent>
                <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                  {renderCard(item)}

                  <Dialog modal={true} open={editOpen} onOpenChange={setEditOpen}>
                    <DialogOverlay>
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
                      <DialogContent
                        onOpenAutoFocus={(e) => e.preventDefault()}
                        className="sm:max-w-[425px]"
                      >
                        <DialogHeader>
                          <DialogTitle>
                            {StringHelper.capitalizeFirstLetter(entityName)}
                          </DialogTitle>
                          {renderForm({
                            mode: 'edit',
                            defaultValues: item,
                            onRemove: handleRemove,
                            onSubmit: handleEdit,
                          })}
                        </DialogHeader>
                      </DialogContent>
                    </DialogOverlay>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ListInput;
