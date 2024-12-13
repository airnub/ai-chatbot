'use client';

import { startTransition, useMemo, useOptimistic, useState } from 'react';

import { saveCountryCode } from '@/app/(chat)/actions';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { countries } from '@/lib/ai/models';
import { cn } from '@/lib/utils';

import { CheckCircleFillIcon, ChevronDownIcon } from './icons';

export function CountrySelector({
  selectedCountryCode,
  className,
}: {
  selectedCountryCode: string;
} & React.ComponentProps<typeof Button>) {
  const [open, setOpen] = useState(false);
  const [optimisticCountryCode, setOptimisticCountryCode] =
    useOptimistic(selectedCountryCode);

  const selectedCountry = useMemo(
    () => countries.find((country) => country.code === optimisticCountryCode),
    [optimisticCountryCode],
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
          {selectedCountry?.code.toUpperCase()}
          <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="min-w-[300px]">
        {countries.map((country) => (
          <DropdownMenuItem
            key={country.code}
            onSelect={() => {
              setOpen(false);

              startTransition(() => {
                setOptimisticCountryCode(country.code);
                saveCountryCode(country.code);
              });
            }}
            className="gap-4 group/item flex flex-row justify-between items-center"
            data-active={country.code === optimisticCountryCode}
          >
            <div className="flex flex-col gap-1 items-start">
              {country.label}
              {country.currency && (
                <div className="text-xs text-muted-foreground">
                  {country.currency}
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
