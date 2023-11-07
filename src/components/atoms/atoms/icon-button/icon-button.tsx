import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import React from 'react'
import type { iconNames } from '../icon/generated'
import { Icon } from '../icon/icon'

const iconButton = cva(
  'rounded-full items-center flex border disabled:hover:bg-white disabled:cursor-not-allowed cursor-pointer bg-white text-blue-500 border-grey-300 hover:bg-grey-50 disabled:text-grey-300 disabled:border-grey-300',
  {
    variants: {
      size: {
        sm: 'p-2',
        lg: 'p-3',
      },
    },
    defaultVariants: {
      size: 'lg',
    },
  }
)

interface IconButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    VariantProps<typeof iconButton> {
  icon: (typeof iconNames)[number]
  iconClassName?: string
}

export function BaseIconButton(
  { icon, size, iconClassName, ...props }: IconButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  return (
    <button className={iconButton({ size })} ref={ref} {...props}>
      <Icon className={iconClassName} name={icon} />
    </button>
  )
}

export const IconButton = React.forwardRef(BaseIconButton) as (
  props: IconButtonProps & {
    ref?: React.ForwardedRef<HTMLButtonElement>
  }
) => ReturnType<typeof BaseIconButton>
