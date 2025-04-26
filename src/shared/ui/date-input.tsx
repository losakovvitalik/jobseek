'use client';

import { format, getDate, getMonth, getYear, isValid, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';
import { CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/shared/ui/button';
import { Calendar } from '@/shared/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import { useEffect, useState } from 'react';
import StringHelper from '../utils/string-helper';
import Select from './select';

const options = new Array(100).fill(undefined).map((_, index) => ({
  value: 2025 - index,
  label: String(2025 - index),
}));

export interface DateInputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

function DateInput({ value, onChange, placeholder = 'Выберите дату' }: DateInputProps) {
  const [date, setDate] = useState<Date | undefined>(() => {
    if (!value) return undefined;
    const parsed = parseISO(value);
    return isValid(parsed) ? parsed : undefined;
  });

  const formatCaption = (date: Date) =>
    StringHelper.capitalizeFirstLetter(date.toLocaleDateString('ru-RU', { month: 'long' }));

  const handleChange = (value: Date | undefined) => {
    if (value) {
      onChange?.(value.toISOString());
      setDate(value);
    }
  };

  useEffect(() => {
    if (!value) {
      setDate(undefined);
      return;
    }
    const parsed = parseISO(value);
    if (isValid(parsed)) {
      setDate(parsed);
    } else {
      console.warn(`[DateInput] Некорректный ISO-формат: "${value}"`);
      setDate(undefined);
    }
  }, [value]);

  const handleYearChange = (year: number) => {
    const currentDate = date || new Date();
    const newYear = new Date(year, getMonth(currentDate), getDate(currentDate), 0, 0, 0);

    setDate(newYear);
    onChange?.(newYear.toISOString());
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            'bg-input border-border h-10 w-full justify-start text-left font-normal',
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
