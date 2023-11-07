import * as DialogPrimitive from '@radix-ui/react-dialog'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { Icon } from '../icon/icon'

export const DialogTrigger = DialogPrimitive.Trigger

export const DialogContent = React.forwardRef<HTMLDivElement, DialogPrimitive.DialogContentProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <DialogPrimitive.Portal>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/20" />
        <DialogPrimitive.Content
          className={twMerge(
            'fixed z-50 flex flex-col rounded-xl border border-slate-300 bg-white p-8 shadow-md',
            className
          )}
          {...props}
          ref={forwardedRef}
        >
          <DialogPrimitive.Close
            aria-label="Close"
            className="absolute end-0 top-0 p-4 text-slate-600 transition-colors hover:text-slate-900 focus:text-slate-900 focus:outline-none"
          >
            <Icon name="xmark" />
          </DialogPrimitive.Close>
          {children}
        </DialogPrimitive.Content>
      </div>
    </DialogPrimitive.Portal>
  )
)

export function Dialog(props: DialogPrimitive.DialogProps) {
  return <DialogPrimitive.Root {...props} />
}

Dialog.Trigger = DialogTrigger
Dialog.Content = DialogContent
