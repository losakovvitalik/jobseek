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
import { ControllerRenderProps } from 'react-hook-form';
import { Badge } from './badge';
import Typography from './typography';

type ValueType = number | string;

export interface MultiSelectOption {
  value: ValueType;
  label: string;
}

interface MultiSelectProps {
  field: ControllerRenderProps<any>;
  options?: MultiSelectOption[];
  emptyText?: string;
  placeholder?: string;
}

const MultiSelect = ({
  field,
  options = [],
  emptyText = 'По вашему запросу ничего не найдено',
  placeholder = 'Выберите варианты',
}: MultiSelectProps) => {
  const selectedValues: MultiSelectOption[] | undefined = field.value;
  const setSelectedValues = field.onChange as (v: MultiSelectOption[]) => void;

  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleOption = (currentOptions: MultiSelectOption) => {
    setSelectedValues(
      selectedValues?.find((op) => op.value === currentOptions.value)
        ? selectedValues?.filter((v) => v.value !== currentOptions.value)
        : [...(selectedValues || []), currentOptions],
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
          className="bg-input border-border h-auto min-h-10 w-full cursor-pointer justify-between p-2 py-1.5"
        >
          {!!selectedValues?.length ? (
            <div className="flex flex-wrap gap-1">
              {selectedValues?.map((option) => (
                <Badge
                  key={option.value}
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    toggleOption(option);
                  }}
                >
                  {option.label}
                  <X className="z-10 size-3 cursor-pointer" />
                </Badge>
              ))}
            </div>
          ) : (
            <Typography variant={'muted'}>{placeholder}</Typography>
          )}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[var(--radix-popover-trigger-width)] p-0"
        //* Хак, чтобы убрать автофокус на мобильных устройствах
        //* https://github.com/pacocoursey/cmdk/issues/127#issuecomment-2426388564
        // TODO добавить проверку, чтоб работало только на мобилках
        onOpenAutoFocus={(e) => e.preventDefault()}
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
                  onSelect={() => toggleOption(option)}
                >
                  <div
                    className={cn(
                      'border-primary flex size-4 items-center justify-center rounded-sm border',
                      selectedValues?.find((op) => op.value === option.value)
                        ? 'bg-primary text-primary-foreground'
                        : 'opacity-50 [&_svg]:invisible',
                    )}
                  >
                    <Check className="size-3.5" />
                  </div>
                  {option.label}
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
