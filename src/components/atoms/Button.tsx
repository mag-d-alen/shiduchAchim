import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'
import { twMerge } from 'tailwind-merge'


const buttonConfig = cva(
  'flex items-center justify-center font-medium  gap-x-2 outline-none disabled:cursor-not-allowed h-fit cursor-pointer transition-all duration-400 ease-out text-lg rounded-full shadow-md w-40',
  {
    variants: {
      intent: {
        primary:
          'bg-blue-500 border-blue-500 text-white hover:bg-blue-400 hover:border-blue-400 disabled:bg-grey-200 disabled:text-grey-400 disabled:border-grey-200',
        destroy:
          'bg-red-500 border-red-500 text-white hover:bg-red-400 hover:border-red-400 disabled:bg-grey-200 disabled:text-grey-400 disabled:border-grey-200',
        outline:
          'bg-white text-blue-500 border-blue-500 hover:bg-sky-100 disabled:bg-grey-50 disabled:border-grey-300 disabled:text-grey-400',
        text: 'text-blue-500 hover:bg-grey-50 hover:border-grey-50 border-transparent disabled:text-grey-300 disabled:hover:bg-transparent disabled:hover:border-transparent',
      },
      size: {
        sm: 'text-sm py-1 px-4',
        md: 'text-base py-2 px-6',
        lg: 'text-xl py-3 px-8',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: "md",
    },
  }
)

interface ButtonProps<T extends React.ElementType>
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  VariantProps<typeof buttonConfig> {
  as?: T
}

 type CompoundButtonProps<T extends React.ElementType<any>> = ButtonProps<T> &
  Omit<React.ComponentPropsWithRef<T>, keyof ButtonProps<T>>

const BaseButton = <T extends React.ElementType = 'button'>(
  { children, intent, size = 'md', className,  as, ...props }: CompoundButtonProps<T>,
   ref: React.ForwardedRef<HTMLButtonElement>
) => {
  const Component = as || 'button'

  return (
    <Component className={twMerge(buttonConfig({ intent, size }), className)} ref={ref} {...props}>
      {children}
    </Component>
  )
}

export const Button = React.forwardRef(BaseButton) as <T extends React.ElementType<any>>(
  props: CompoundButtonProps<T> & {
    ref?: React.ForwardedRef<HTMLButtonElement>
  }
) => ReturnType<typeof BaseButton>