import * as PopoverPrimitive from '@radix-ui/react-popover'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { listbox } from '~/components/electrons/listbox'

export const PopoverTrigger = PopoverPrimitive.Trigger

export function PopoverContent({ children, className, ...props }: PopoverPrimitive.PopoverContentProps) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content className={twMerge(listbox(), className)} sideOffset={5} {...props}>
        {children}
        <PopoverPrimitive.Arrow />
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  )
}

export function Popover(props: PopoverPrimitive.PopoverProps) {
  return <PopoverPrimitive.Root {...props} />
}

Popover.Trigger = PopoverTrigger
Popover.Content = PopoverContent
