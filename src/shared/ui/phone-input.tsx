'use client';
import { cn } from '@/lib/utils';
import { IMaskInput } from 'react-imask';

export interface PhoneInputProps {
  onChange?: (value: string) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  value?: string;
  placeholder?: string;
  className?: string;
}
const PhoneInput = ({ onChange, onBlur, value, placeholder, className }: PhoneInputProps) => {
  return (
    <IMaskInput
      mask="+{7} (000) 000-00-00"
      unmask={true}
      onAccept={(value) => onChange?.(value)} // Handle the accepted value
      placeholder={placeholder}
      value={value as string}
      onBlur={onBlur}
      type="tel"
      className={cn(
        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground bg-input border-border flex h-10 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        className,
      )}
    />
  );
};

export default PhoneInput;
