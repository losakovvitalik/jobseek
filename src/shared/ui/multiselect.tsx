'use client';
import { cn } from '@/lib/utils';
import { Button } from '@/shared/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/shared/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import { Check, ChevronsUpDown, X } from 'lucide-react';
import { useState } from 'react';
import { isMobile } from '../utils/is-mobile';
import { Badge } from './badge';
import Typography from './typography';

type ValueType = number | string;

export interface MultiSelectOption {
  value: ValueType;
  label: string;
}

export interface MultiSelectProps {
  options?: MultiSelectOption[];
  emptyText?: string;
  placeholder?: string;
  value: ValueType[];
  onChange: (v: ValueType[]) => void;
}

const MultiSelect = ({
  options = [],
  emptyText = 'По вашему запросу ничего не найдено',
  placeholder = 'Выберите варианты',
  onChange,
  value,
}: MultiSelectProps) => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleOption = (currentOptions: ValueType) => {
    onChange(
      value?.find((op) => op === currentOptions)
        ? value?.filter((v) => v !== currentOptions)
        : [...(value || []), currentOptions],
    );
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="bg-input border-border grid h-auto min-h-10 w-full cursor-pointer grid-cols-[1fr_auto] p-2 py-1.5"
        >
          {!!value?.length ? (
            <div className="flex flex-wrap gap-1">
              {value?.map((option) => (
                <Badge
                  key={option}
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    toggleOption(option);
                  }}
                >
                  {options.find((item) => item.value === option)?.label}
                  <X className="z-10 size-3 cursor-pointer" />
                </Badge>
              ))}
            </div>
          ) : (
            <Typography className="truncate text-left" variant="muted">
              {placeholder}
            </Typography>
          )}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[var(--radix-popover-trigger-width)] p-0"
        //* Хак, чтобы убрать автофокус на мобильных устройствах
        //* https://github.com/pacocoursey/cmdk/issues/127#issuecomment-2426388564
        onOpenAutoFocus={(e) => isMobile() && e.preventDefault()}
      >
        <Command loop>
          <CommandInput placeholder="Поиск..." value={searchTerm} onValueChange={setSearchTerm} />
          <CommandList>
            <CommandEmpty>{emptyText || 'Ничего не найдено'}</CommandEmpty>
            <CommandGroup>
              {filteredOptions.map((option) => (
                <CommandItem
                  className="cursor-pointer"
                  key={option.value}
                  onSelect={() => toggleOption(option.value)}
                >
                  <div
                    className={cn(
                      'border-primary flex size-4 items-center justify-center rounded-sm border',
                      value?.find((op) => op === option.value)
                        ? 'bg-primary text-primary-foreground'
                        : 'opacity-50 [&_svg]:invisible',
                    )}
                  >
                    <Check className="size-3.5" />
                  </div>
                  <Typography>{option.label}</Typography>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default MultiSelect;
