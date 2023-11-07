import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Icon } from '../icon/icon'

export function Checkbox(props: CheckboxPrimitive.CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      className="flex h-5 w-5 flex-col items-center justify-center rounded border-2 border-slate-600 text-white transition-colors data-[state=checked]:bg-slate-600"
      {...props}
    >
      <CheckboxPrimitive.Indicator>
        <Icon className="h-3" name="check" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
