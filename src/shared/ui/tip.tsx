'use client';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip';

const Tip = ({
  content,
  children,
  className,
}: React.PropsWithChildren<{ content: string | React.ReactNode; className?: string }>) => {
  const [open, setOpen] = useState(false);

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip open={open}>
        <TooltipTrigger asChild>
          <button
            type="button"
            className={cn('cursor-pointer', className)}
            onClick={() => setOpen(true)}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onTouchStart={() => setOpen(true)}
            onKeyDown={(e) => {
              e.preventDefault();
              if (e.key === 'Enter') {
                setOpen(!open);
              }
            }}
          >
            {children}
          </button>
        </TooltipTrigger>
        <TooltipContent className={!content ? 'hidden' : ''}>
          <span className="inline-block">{content}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export { Tip };
