'use client';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'border-border placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className,
      )}
      {...props}
    />
  );
}

const AutoHeightTextarea = ({ className, ...props }: React.ComponentProps<'textarea'>) => {
  const [value, setValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [value]);

  return (
    <Textarea
      className={cn('resize-none overflow-hidden', className)}
      ref={textareaRef}
      value={value || ''}
      onChange={(e) => setValue(e.target.value)}
      {...props}
    />
  );
};

export default AutoHeightTextarea;

export { Textarea };
