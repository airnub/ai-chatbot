'use client';

import { startTransition, useMemo, useOptimistic, useState } from 'react';

import { saveLanguageCode } from '@/app/(chat)/actions';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { languages } from '@/lib/ai/models';
import { cn } from '@/lib/utils';

import { CheckCircleFillIcon, ChevronDownIcon } from './icons';

export function LanguageSelector({
  selectedLanguageCode,
  className,
}: {
  selectedLanguageCode: string;
} & React.ComponentProps<typeof Button>) {
  const [open, setOpen] = useState(false);
  const [optimisticLanguageCode, setOptimisticLanguageCode] =
    useOptimistic(selectedLanguageCode);

  const selectedLanguage = useMemo(
    () => languages.find((language) => language.code === optimisticLanguageCode),
    [optimisticLanguageCode],
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
          {selectedLanguage?.code.toUpperCase()}
          <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="min-w-[300px]">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onSelect={() => {
              setOpen(false);

              startTransition(() => {
                setOptimisticLanguageCode(language.code);
                saveLanguageCode(language.code);
              });
            }}
            className="gap-4 group/item flex flex-row justify-between items-center"
            data-active={language.code === optimisticLanguageCode}
          >
            <div className="flex flex-col gap-1 items-start">
              {language.label}
              {/* {language.description && (
                <div className="text-xs text-muted-foreground">
                  {language.description}
                </div>
              )} */}
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
