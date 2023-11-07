import type { UseFloatingReturn } from '@floating-ui/react-dom'
import {
  autoUpdate,
  offset,
  useFloating,
  size as floatingSize,
  autoPlacement,
} from '@floating-ui/react-dom'
import type {
  ListboxButtonProps,
  ListboxOptionProps,
  ListboxOptionsProps,
  ListboxProps,
} from '@headlessui/react'
import { Listbox } from '@headlessui/react'
import type { VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import { isFunction } from 'lodash'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { input } from '../../electrons/input'
import { listbox, listboxItem } from '../../electrons/listbox'
import { FormControl } from '../form-control/form-control'
import { Icon } from '../icon/icon'

const SelectContext = React.createContext<{ floating?: UseFloatingReturn<HTMLButtonElement> }>({
  floating: undefined,
})

export function SelectButton({
  size,
  intent,
  children,
  placeholder,
  className,
  ...props
}: VariantProps<typeof input> & ListboxButtonProps<'button'>) {
  const { floating } = React.useContext(SelectContext)
  const { errorMessage } = FormControl.useContext()

  return (
    <Listbox.Button
      className={(bag) =>
        twMerge(
          input({ size, intent: errorMessage ? 'error' : intent }),
          'relative gap-x-4',
          isFunction(className) ? className(bag) : className
        )
      }
      ref={floating?.reference}
      type="button"
      {...props}
    >
      {(bag) => (
        <>
          {children ? (
            isFunction(children) ? (
              children(bag)
            ) : (
              children
            )
          ) : (
            <span className={clsx(bag.disabled ? 'text-grey-400' : 'text-slate-400')}>
              {placeholder}
            </span>
          )}
          <Icon
            className={clsx(
              'absolute left-8 h-4 w-4 transition-transform',
              bag.open && 'rotate-180'
            )}
            name="chevron-down"
          />
        </>
      )}
    </Listbox.Button>
  )
}

export function SelectOption<T = string>({ children, ...props }: ListboxOptionProps<'li', T>) {
  return (
    <Listbox.Option className={listboxItem()} {...props}>
      {({ selected }) => {
        return (
          <>
            {children}
            {selected && <Icon aria-label="checkIcon" className="h-4 w-4" name="check" />}
          </>
        )
      }}
    </Listbox.Option>
  )
}

export function SelectSelectedItem({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center overflow-hidden rounded-full bg-slate-200 text-sm text-slate-700">
      <span className="py-1 pl-3 pr-2">{children}</span>
    </span>
  )
}

export function SelectSelectedList({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap gap-2">{children}</div>
}

export function SelectOptions({ children, ...props }: ListboxOptionsProps<'ul'>) {
  const { floating } = React.useContext(SelectContext)

  return (
    <Listbox.Options
      as="div"
      className={listbox()}
      ref={floating?.floating}
      style={{
        position: floating?.strategy,
        top: floating?.y ?? 0,
        left: floating?.x ?? 0,
        zIndex: 999,
      }}
      {...props}
    >
      {(bag) => (
        <ul className="relative z-50 min-h-0 overflow-auto p-2">
          {isFunction(children) ? children(bag) : children}
        </ul>
      )}
    </Listbox.Options>
  )
}

export function Select<T = string>(props: ListboxProps<'div', T, T extends (infer U)[] ? U : T>) {
  const floating = useFloating<HTMLButtonElement>({
    strategy: 'fixed',
    middleware: [
      floatingSize({
        apply({ availableWidth, rects, elements }) {
          Object.assign(elements.floating.style, {
            minWidth: `${rects.reference.width}px`,
            maxWidth: `${availableWidth}px`,
            maxHeight: '256px',
          })
        },
      }),
      autoPlacement({ allowedPlacements: ['top', 'bottom'] }),
      offset(8),
    ],
    whileElementsMounted: autoUpdate,
  })

  return (
    <SelectContext.Provider value={{ floating }}>
      <Listbox as="div" className="relative flex min-w-0 flex-1 flex-col gap-y-3" {...props} />
    </SelectContext.Provider>
  )
}

Select.Button = SelectButton
Select.Options = SelectOptions
Select.Option = SelectOption
Select.SelectedList = SelectSelectedList
Select.SelectedItem = SelectSelectedItem
