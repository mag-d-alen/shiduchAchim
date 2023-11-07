import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'
import { FormControl } from '../form-control/form-control'
import { Icon } from '../icon/icon'

function RadioButton({ children, ...props }: RadioGroupPrimitive.RadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      className="rounded-full border border-blue-500 bg-white py-2 px-5 font-medium text-blue-500 transition-colors data-[state=checked]:bg-blue-500 data-[state=checked]:text-white"
      {...props}
    >
      {children}
    </RadioGroupPrimitive.Item>
  )
}

function RadioCard({ children, className, ...props }: RadioGroupPrimitive.RadioGroupItemProps) {
  const { disabled } = FormControl.useFieldsetContext()

  return (
    <RadioGroupPrimitive.Item
      className={twMerge(
        clsx(
          'relative flex flex-1 flex-col items-center justify-center rounded-2xl border border-slate-400 bg-white p-3 font-medium text-slate-700 ring-blue-500 transition-all disabled:cursor-not-allowed disabled:border-grey-300 disabled:bg-grey-50 disabled:text-grey-400 data-[state=checked]:border-blue-500 data-[state=checked]:ring-1'
        ),
        className
      )}
      disabled={disabled}
      {...props}
    >
      <RadioGroupPrimitive.Indicator asChild forceMount>
        <div className="absolute top-2 right-2 flex h-5 w-5 flex-col items-center justify-center rounded-full border border-slate-400 transition-colors data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500">
          <Icon className="h-3 w-3 text-white" name="check" />
        </div>
      </RadioGroupPrimitive.Indicator>
      <div className={clsx(disabled && 'grayscale')}>{children}</div>
    </RadioGroupPrimitive.Item>
  )
}

export function RadioGroup({ children, className, ...props }: RadioGroupPrimitive.RadioGroupProps) {
  const { i18n } = useTranslation()

  return (
    <RadioGroupPrimitive.Root className={twMerge('flex flex-wrap gap-1.5', className)} dir={i18n.dir()} {...props}>
      {children}
    </RadioGroupPrimitive.Root>
  )
}

RadioGroup.Button = RadioButton
RadioGroup.Card = RadioCard
