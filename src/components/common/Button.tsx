import { cva, type VariantProps } from 'class-variance-authority'
// import clsx from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'
// import type { iconNames } from '../icon/generated'
// import { Icon } from '../icon/icon'

const button = cva(
  ' items-center justify-center font-medium border box-border flex gap-x-2 outline-none transition-colors disabled:cursor-not-allowed cursor-pointer round-button',
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
        lg: 'text-base py-3 px-8',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'md',
    },
  }
)

interface ButtonProps<T extends React.ElementType>
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    VariantProps<typeof button> {
//   iconLeft?: (typeof iconNames)[number]
//   iconRight?: (typeof iconNames)[number]
  as?: T
}

type CompoundButtonProps<T extends React.ElementType<any>> = ButtonProps<T> &
  Omit<React.ComponentPropsWithRef<T>, keyof ButtonProps<T>>

const BaseButton = <T extends React.ElementType = 'button'>(
  { children, intent, size = 'md', className, iconLeft, iconRight, as, ...props }: CompoundButtonProps<T>,
  ref: React.ForwardedRef<HTMLButtonElement>
) => {
  const Component = as || 'button'

  return (
    <Component className={twMerge(button({ intent, size }), className)} ref={ref} {...props}>
      {/* {iconLeft && <Icon className={clsx(size === 'md' && 'h-5 w-5')} name={iconLeft} />} */}
      {children}
      {/* {iconRight && <Icon className={clsx(size === 'md' && 'h-5 w-5')} name={iconRight} />} */}
    </Component>
  )
}

export const Button = React.forwardRef(BaseButton) as <T extends React.ElementType<any>>(
  props: CompoundButtonProps<T> & {
    ref?: React.ForwardedRef<HTMLButtonElement>
  }
) => ReturnType<typeof BaseButton>
