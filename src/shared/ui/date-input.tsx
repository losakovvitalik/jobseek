'use client';

import { format, getDate, getMonth, getYear } from 'date-fns';
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

export interface DateInputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

function DateInput({ value, onChange, placeholder = 'Выберите дату' }: DateInputProps) {
  const [date, setDate] = React.useState<Date | undefined>(value ? new Date(value) : undefined);

  const formatCaption = (date: Date) =>
    StringHelper.capitalizeFirstLetter(date.toLocaleDateString('ru-RU', { month: 'long' }));

  const handleChange = (value: Date | undefined) => {
    if (value) {
      onChange?.(value.toISOString());
      setDate(value);
    }
  };

  const handleYearChange = (year: number) => {
    const newYear = new Date(
      year,
      getMonth(value || new Date()),
      getDate(value || new Date()),
      0,
      0,
      0,
    );

    setDate(newYear);
    onChange?.(newYear.toISOString());
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            'bg-input border-border w-full justify-start text-left font-normal',
            !date && 'text-muted-foreground',
          )}
          variant={'outline'}
        >
          <CalendarIcon />
          {date ? (
            format(date, 'PPP', {
              locale: ru,
            })
          ) : (
            <span>{placeholder}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="flex w-auto flex-col space-y-2 p-2">
        <Select
          options={options}
          value={date ? getYear(date) : options[0].value}
          onChange={handleYearChange}
        />
        <div className="rounded-md border">
          <Calendar
            locale={ru}
            mode="single"
            className="w-max"
            selected={date}
            defaultMonth={date}
            onSelect={handleChange}
            formatters={{
              formatCaption,
            }}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default DateInput;
