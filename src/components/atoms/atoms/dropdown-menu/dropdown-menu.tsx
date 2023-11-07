import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { Icon } from '~/components/atoms/icon/icon'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'

export function DropdownMenu(props: DropdownMenuPrimitive.DropdownMenuProps) {
  const { i18n } = useTranslation()

  return <DropdownMenuPrimitive.Root dir={i18n.dir()} modal {...props} />
}

function DropdownMenuItem({ className, ...props }: DropdownMenuPrimitive.DropdownMenuItemProps) {
  return (
    <DropdownMenuPrimitive.Item
      className={twMerge(
        'flex w-full cursor-pointer items-center gap-x-3 rounded-lg px-4 py-2 font-medium text-slate-900 outline-none data-[disabled]:cursor-not-allowed data-[highlighted]:bg-slate-50 data-[disabled]:text-grey-300 rtl:font-afek',
        className
      )}
      {...props}
    />
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}: DropdownMenuPrimitive.DropdownMenuSeparatorProps) {
  return (
    <DropdownMenuPrimitive.Separator
      className={twMerge('my-2 h-px w-full bg-slate-200', className)}
      {...props}
    />
  )
}

function DropdownMenuRadioGroup(props: DropdownMenuPrimitive.DropdownMenuRadioGroupProps) {
  return <DropdownMenuPrimitive.RadioGroup {...props} />
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: DropdownMenuPrimitive.DropdownMenuRadioItemProps) {
  return (
    <DropdownMenuPrimitive.RadioItem
      className={twMerge(
        'flex w-full cursor-pointer items-center gap-x-3 rounded-lg px-4 py-2 text-start font-medium text-slate-900 outline-none data-[disabled]:cursor-not-allowed data-[highlighted]:bg-slate-50 data-[disabled]:text-grey-300 rtl:font-afek',
        className
      )}
      {...props}
    >
      <div className="flex h-4 w-4 items-center">
        <DropdownMenuPrimitive.ItemIndicator className="group" forceMount>
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75 group-data-[state=unchecked]:hidden" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-slate-300 group-data-[state=checked]:bg-blue-500" />
          </span>
        </DropdownMenuPrimitive.ItemIndicator>
      </div>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

function DropdownMenuLabel({ className, ...props }: DropdownMenuPrimitive.DropdownMenuLabelProps) {
  return (
    <DropdownMenuPrimitive.Label
      className={twMerge('ps-4 text-sm text-slate-500', className)}
      {...props}
    />
  )
}

function DropdownMenuContent({
  children,
  className,
  ...props
}: DropdownMenuPrimitive.DropdownMenuContentProps) {
  const { i18n } = useTranslation()

  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        align={i18n.dir() === 'rtl' ? 'end' : 'start'}
        className={twMerge(
          'z-50 rounded-lg border border-slate-300 bg-white p-2 shadow-md rtl:font-afek',
          className
        )}
        sideOffset={8}
        {...props}
      >
        {children}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  )
}

function DropdownMenuTrigger({
  className,
  ...props
}: DropdownMenuPrimitive.DropdownMenuTriggerProps) {
  return <DropdownMenuPrimitive.Trigger className={twMerge('outline-none', className)} {...props} />
}

function DropdownMenuItemIndicator({
  className,
  ...props
}: DropdownMenuPrimitive.DropdownMenuItemIndicatorProps) {
  return (
    <DropdownMenuPrimitive.DropdownMenuItemIndicator className={twMerge('', className)} {...props}>
      <Icon name="check" className="h-5 w-5 font-bold" />
    </DropdownMenuPrimitive.DropdownMenuItemIndicator>
  )
}

function DropdownMenuCheckboxItem({
  children,
  className,
  ...props
}: DropdownMenuPrimitive.DropdownMenuCheckboxItemProps) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      className={twMerge(
        'flex cursor-pointer flex-row items-center justify-start gap-x-2 p-2',
        className
      )}
      {...props}
    >
      <DropdownMenuItemIndicator
        forceMount
        asChild
        className="flex h-5 w-5 flex-col items-center justify-center rounded border-2 border-slate-600 text-white transition-colors data-[state=checked]:border-blue-400 data-[state=checked]:bg-blue-400"
      />
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

DropdownMenu.Item = DropdownMenuItem
DropdownMenu.Content = DropdownMenuContent
DropdownMenu.Trigger = DropdownMenuTrigger
DropdownMenu.Separator = DropdownMenuSeparator
DropdownMenu.Label = DropdownMenuLabel
DropdownMenu.RadioGroup = DropdownMenuRadioGroup
DropdownMenu.RadioItem = DropdownMenuRadioItem
DropdownMenu.CheckBoxItem = DropdownMenuCheckboxItem
DropdownMenu.ItemIndicator = DropdownMenuItemIndicator
