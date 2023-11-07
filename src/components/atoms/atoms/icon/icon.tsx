import React from 'react'
import { twMerge } from 'tailwind-merge'
import spriteUrl from '../../../assets/icons.svg'
import type { IconProps } from './generated'

export const Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & IconProps>(
  ({ name, className, ...props }, ref) => {
    return (
      <svg className={twMerge('h-6 w-6 flex-shrink-0', className)} viewBox="0 0 24 24" {...props} ref={ref}>
        <use xlinkHref={`${spriteUrl}#${name}`} />
      </svg>
    )
  }
)
