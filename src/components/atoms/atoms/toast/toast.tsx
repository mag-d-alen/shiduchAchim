import * as ToastPrimitive from '@radix-ui/react-toast'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import { Icon } from '../icon/icon'

const toast = cva(
  'flex w-80 items-start justify-between data-[state=open]:animate-slide-in data-[state=closed]:animate-hide rounded-lg border border-slate-300 bg-white p-4 shadow-md',
  {
    variants: {
      intent: {
        success: 'text-blue-500',
        error: 'text-red-500',
      },
    },
    defaultVariants: {
      intent: 'success',
    },
  }
)

export function ToastTitle(props: ToastPrimitive.ToastTitleProps) {
  return <ToastPrimitive.Title className="font-semibold" {...props} />
}

export function ToastDescription(props: ToastPrimitive.ToastDescriptionProps) {
  return <ToastPrimitive.Description className="text-slate-600" {...props} />
}

export function ToastViewport(props: ToastPrimitive.ToastViewportProps) {
  return <ToastPrimitive.Viewport className="fixed right-0 top-0 z-50 p-6" {...props} />
}

export const Toast = ({ children, intent, ...props }: ToastPrimitive.ToastProps & VariantProps<typeof toast>) => {
  return (
    <ToastPrimitive.Root className={toast({ intent })} {...props}>
      <div className="flex flex-col gap-y-2">{children}</div>
      <ToastPrimitive.Close aria-label="Close">
        <span aria-hidden>
          <Icon className="h-3 w-3 text-slate-700" name="x" />
        </span>
      </ToastPrimitive.Close>
    </ToastPrimitive.Root>
  )
}

Toast.Title = ToastTitle
Toast.Description = ToastDescription
Toast.Provider = ToastPrimitive.Provider
Toast.Viewport = ToastViewport
