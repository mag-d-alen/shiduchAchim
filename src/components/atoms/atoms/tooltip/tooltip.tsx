import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { twMerge } from 'tailwind-merge'

export function Tooltip(props: TooltipPrimitive.TooltipProps) {
  return <TooltipPrimitive.Root {...props} />
}

export function TooltipTrigger(props: TooltipPrimitive.TooltipTriggerProps) {
  return <TooltipPrimitive.Trigger {...props} />
}

export function TooltipContent({ children, className, ...props }: TooltipPrimitive.TooltipContentProps) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        className={twMerge('rounded-lg bg-slate-800 p-2 font-medium text-white', className)}
        sideOffset={4}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="fill-slate-800" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

Tooltip.Trigger = TooltipTrigger
Tooltip.Content = TooltipContent
Tooltip.Provider = TooltipPrimitive.Provider
