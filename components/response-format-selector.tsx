'use client';

import { startTransition, useMemo, useOptimistic, useState } from 'react';

import { saveResponseFormat } from '@/app/(chat)/actions';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { responseFormats } from '@/lib/ai/models';
import { cn } from '@/lib/utils';

import { CheckCircleFillIcon, ChevronDownIcon } from './icons';

export function ResponseFormatSelector({
  selectedResponseFormat,
  className,
}: {
  selectedResponseFormat: string;
} & React.ComponentProps<typeof Button>) {
  const [open, setOpen] = useState(false);
  const [optimisticResponseFormat, setOptimisticResponseFormat] =
    useOptimistic(selectedResponseFormat);

  const selectedResponse = useMemo(
    () => responseFormats.find((responseFormat) => responseFormat.code === optimisticResponseFormat),
    [optimisticResponseFormat],
  );

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger
        asChild
        className={cn(
          'w-fit data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
          className,
        )}
      >
        <Button variant="outline" className="md:px-2 md:h-[34px]">
          {selectedResponse?.code.toUpperCase()}
          <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="min-w-[300px]">
        {responseFormats.map((responseFormat) => (
          <DropdownMenuItem
            key={responseFormat.code}
            onSelect={() => {
              setOpen(false);

              startTransition(() => {
                setOptimisticResponseFormat(responseFormat.code);
                saveResponseFormat(responseFormat.code);
              });
            }}
            className="gap-4 group/item flex flex-row justify-between items-center"
            data-active={responseFormat.code === optimisticResponseFormat}
          >
            <div className="flex flex-col gap-1 items-start">
              {responseFormat.label}
              {responseFormat.description && (
                <div className="text-xs text-muted-foreground">
                  {responseFormat.description}
                </div>
              )}
            </div>
            <div className="text-primary dark:text-primary-foreground opacity-0 group-data-[active=true]/item:opacity-100">
              <CheckCircleFillIcon />
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
