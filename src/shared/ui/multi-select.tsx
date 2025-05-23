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
import { useId, useState } from 'react';
import { isMobile } from '../utils/is-mobile';
import { Badge } from './badge';
import Typography from './typography';

export type MultiSelectValueType = number | string;

export interface MultiSelectOption {
  value: MultiSelectValueType;
  label: string;
}

export interface MultiSelectProps {
  options?: MultiSelectOption[];
  emptyText?: string;
  placeholder?: string;
  value?: MultiSelectValueType[];
  onChange: (v: MultiSelectValueType[]) => void;
  searchable?: boolean;
}

const MultiSelect = ({
  options = [],
  emptyText = 'По вашему запросу ничего не найдено',
  placeholder = 'Выберите варианты',
  onChange,
  value,
  searchable,
}: MultiSelectProps) => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const id = useId();

  const toggleOption = (currentOptions: MultiSelectValueType) => {
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
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={`${id}-multiselect-options`}
          className="bg-input border-border grid h-auto min-h-10 w-full cursor-pointer grid-cols-[1fr_auto] p-2 py-1.5"
        >
          {!!value?.length ? (
            <ul className="flex flex-wrap gap-1">
              {value?.map((option) => {
                const currentOption = options.find((item) => item.value === option);

                return (
                  <li key={option}>
                    <Badge
                      role="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        toggleOption(option);
                      }}
                      aria-label={`Удалить ${currentOption?.label};`}
                    >
                      {currentOption?.label}

                      <X className="z-10 size-3 cursor-pointer" />
                    </Badge>
                  </li>
                );
              })}
            </ul>
          ) : (
            <Typography className="truncate text-left" id={`${id}-label`} variant="muted">
              {placeholder}
            </Typography>
          )}
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" aria-hidden="true" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[var(--radix-popover-trigger-width)] p-0"
        //* Хак, чтобы убрать автофокус на мобильных устройствах
        //* https://github.com/pacocoursey/cmdk/issues/127#issuecomment-2426388564
        id={`${id}-multiselect-options`}
        onOpenAutoFocus={(e) => isMobile() && e.preventDefault()}
        aria-multiselectable="true"
      >
        <Command loop>
          {searchable && (
            <CommandInput
              role="searchbox"
              placeholder="Поиск..."
              value={searchTerm}
              onValueChange={setSearchTerm}
              aria-label="Поиск опций"
            />
          )}
          <CommandList>
            <CommandEmpty>{emptyText || 'Ничего не найдено'}</CommandEmpty>
            <CommandGroup>
              {filteredOptions.map((option) => (
                <CommandItem
                  className="cursor-pointer"
                  key={option.value}
                  onSelect={() => toggleOption(option.value)}
                  role="option"
                  aria-selected={value?.includes(option.value)}
                  id={`${id}-option-${option.value}`}
                >
                  <div
                    className={cn(
                      'border-primary flex size-4 items-center justify-center rounded-sm border',
                      value?.find((op) => op === option.value)
                        ? 'bg-primary text-primary-foreground'
                        : 'opacity-50 [&_svg]:invisible',
                    )}
                  >
                    <Check className="size-3.5" aria-hidden="true" />
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
