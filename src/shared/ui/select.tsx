'use client';
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
import { ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';
import Typography from './typography';

type ValueType = number | string;

export interface SelectOption {
  value: ValueType;
  label: string;
}

interface SelectProps {
  options?: SelectOption[];
  emptyText?: string;
  placeholder?: string;
  value: ValueType;
  onChange: (v: ValueType) => void;
  searchable?: boolean;
}

const Select = ({
  options = [],
  emptyText = 'Ничего не найдено',
  placeholder,
  value: selectedValue,
  onChange,
  searchable,
}: SelectProps) => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (currentOptions: SelectOption) => {
    onChange(currentOptions.value);
    setOpen(false);
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
          className="grid h-auto w-full grid-cols-[1fr_auto] justify-between p-2 bg-input/30"
        >
          {selectedValue ? (
            <div className="flex flex-wrap gap-1">
              {options.find((op) => op.value == selectedValue)?.label}
            </div>
          ) : (
            <Typography className="truncate text-sm">{placeholder}</Typography>
          )}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
        <Command>
          {searchable && (
            <CommandInput placeholder="Поиск..." value={searchTerm} onValueChange={setSearchTerm} />
          )}
          <CommandList>
            <CommandEmpty>{emptyText || 'Ничего не найдено'}</CommandEmpty>
            <CommandGroup>
              {filteredOptions.map((option) => (
                <CommandItem
                  className="cursor-pointer"
                  key={option.value}
                  onSelect={() => handleChange(option)}
                >
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

export default Select;
