import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import type { PropsWithChildren } from 'react'
import React from 'react'
import { twMerge } from 'tailwind-merge'

function Content({ className, children, ...props }: AlertDialogPrimitive.AlertDialogContentProps) {
  return (
    <AlertDialogPrimitive.Portal>
      <AlertDialogPrimitive.Overlay className="fixed inset-0 z-30 bg-black/60" />
      <AlertDialogPrimitive.Content
        className={twMerge(
          'fixed left-1/2 top-1/2 z-40 mx-auto flex -translate-x-1/2 -translate-y-1/2 flex-col rounded-lg bg-white shadow-md rtl:font-afek',
          className
        )}
        {...props}
      >
        {children}
      </AlertDialogPrimitive.Content>
    </AlertDialogPrimitive.Portal>
  )
}

function Header({ title }: { title: React.ReactNode | string }) {
  return (
    <div className="flex items-center border-b border-grey-200 px-6 py-4">
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
    </div>
  )
}

function Footer({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <footer
      className={twMerge(
        'sticky flex flex-row-reverse items-center justify-between border-t border-grey-200 px-6 py-3',
        className
      )}
    >
      {children}
    </footer>
  )
}

function Action({ children, ...props }: AlertDialogPrimitive.AlertDialogActionProps) {
  return <AlertDialogPrimitive.Action {...props}>{children}</AlertDialogPrimitive.Action>
}

function Cancel({ children, ...props }: AlertDialogPrimitive.AlertDialogCancelProps) {
  return (
    <AlertDialogPrimitive.Cancel {...props} asChild>
      {children}
    </AlertDialogPrimitive.Cancel>
  )
}

function Body({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={twMerge('min-h-0 overflow-y-auto p-6 text-slate-700', className)}>{children}</div>
}

function Trigger(props: AlertDialogPrimitive.AlertDialogTriggerProps) {
  return <AlertDialogPrimitive.Trigger className="outline-none rtl:font-afek" {...props} />
}

export function AlertDialog(props: AlertDialogPrimitive.AlertDialogProps) {
  return <AlertDialogPrimitive.Root {...props} />
}

AlertDialog.Content = Content
AlertDialog.Header = Header
AlertDialog.Footer = Footer
AlertDialog.Trigger = Trigger
AlertDialog.Cancel = Cancel
AlertDialog.Action = Action
AlertDialog.Body = Body
