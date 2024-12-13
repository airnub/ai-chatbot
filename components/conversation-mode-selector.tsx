'use client';

import { startTransition, useMemo, useOptimistic, useState } from 'react';

import { saveConversationMode } from '@/app/(chat)/actions';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { conversationModes } from '@/lib/ai/models';
import { cn } from '@/lib/utils';

import { CheckCircleFillIcon, ChevronDownIcon } from './icons';

export function ConversationModeSelector({
  selectedConversationMode,
  className,
}: {
  selectedConversationMode: string;
} & React.ComponentProps<typeof Button>) {
  const [open, setOpen] = useState(false);
  const [optimisticConversationMode, setOptimisticConversationMode] =
    useOptimistic(selectedConversationMode);

  const selectedConversation = useMemo(
    () => conversationModes.find((conversationMode) => conversationMode.code === optimisticConversationMode),
    [optimisticConversationMode],
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
          {selectedConversation?.code.toUpperCase()}
          <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="min-w-[300px]">
        {conversationModes.map((conversationMode) => (
          <DropdownMenuItem
            key={conversationMode.code}
            onSelect={() => {
              setOpen(false);

              startTransition(() => {
                setOptimisticConversationMode(conversationMode.code);
                saveConversationMode(conversationMode.code);
              });
            }}
            className="gap-4 group/item flex flex-row justify-between items-center"
            data-active={conversationMode.code === optimisticConversationMode}
          >
            <div className="flex flex-col gap-1 items-start">
              {conversationMode.label}
              {conversationMode.description && (
                <div className="text-xs text-muted-foreground">
                  {conversationMode.description}
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
