'use client';

import { format, getYear, setYear } from 'date-fns';
import { ru } from 'date-fns/locale';
import { CalendarIcon } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/shared/ui/button';
import { Calendar } from '@/shared/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import StringHelper from '../utils/string-helper';
import Select from './select';

const options = new Array(100).fill(undefined).map((_, index) => ({
  value: 2025 - index,
  label: 2025 - index,
}));

export function DatePickerWithPresets() {
  const [date, setDate] = React.useState<Date>();

  const formatCaption = (date: Date) =>
    StringHelper.capitalizeFirstLetter(date.toLocaleDateString('ru-RU', { month: 'long' }));

  console.log(date);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'bg-input border-border w-full justify-start text-left font-normal',
            !date && 'text-muted-foreground',
          )}
        >
          <CalendarIcon />
          {date ? (
            format(date, 'PPP', {
              locale: ru,
            })
          ) : (
            <span>Выберите дату</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="flex flex-col space-y-2 p-2 w-auto">
        <Select
          options={options}
          value={getYear(date || new Date())}
          onChange={(value) =>
            setDate(
              setYear(date || new Date(), typeof value === 'string' ? parseInt(value) : value),
            )
          }
        />
        <div className="rounded-md border">
          <Calendar
            locale={ru}
            mode="single"
            className="w-max"
            selected={date}
            // month={date}
            defaultMonth={date}
            onSelect={setDate}
            formatters={{
              formatCaption,
            }}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
