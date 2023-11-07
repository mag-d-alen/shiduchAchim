import type { UseFloatingReturn } from '@floating-ui/react-dom'
import { autoUpdate, offset, useFloating, size as floatingSize, autoPlacement } from '@floating-ui/react-dom'
import type {
  ComboboxButtonProps,
  ComboboxInputProps,
  ComboboxOptionProps,
  ComboboxOptionsProps,
  ComboboxProps,
} from '@headlessui/react'
import { Combobox } from '@headlessui/react'
import type { VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import { isFunction } from 'lodash'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { input } from '../../electrons/input'
import { listbox, listboxItem } from '../../electrons/listbox'
import { Chip } from '../chip/chip'
import { Icon } from '../icon/icon'

const ComboboxContext = React.createContext<{ floating?: UseFloatingReturn<HTMLDivElement> }>({
  floating: undefined,
})

export function MultiSelectComboboxInput<T = string>({
  size,
  intent,
  ...props
}: ComboboxButtonProps<'button'> & Omit<ComboboxInputProps<'input', T>, 'size'> & VariantProps<typeof input>) {
  const { floating } = React.useContext(ComboboxContext)

  return (
    <div className="relative flex">
      <Combobox.Input
        className={twMerge(input({ size, intent }), 'flex-1 pl-14')}
        ref={floating?.reference}
        {...props}
      />
      <Combobox.Button className="absolute inset-y-0 left-0 px-8 text-slate-600 disabled:cursor-not-allowed disabled:text-grey-400">
        {({ open }) => (
          <Icon className={clsx('h-4 w-4 transition-transform', open && 'rotate-180')} name="chevron-down" />
        )}
      </Combobox.Button>
    </div>
  )
}

export function MultiSelectComboboxOption<T = string>({ children, ...props }: ComboboxOptionProps<'li', T>) {
  return (
    <Combobox.Option className={listboxItem()} {...props}>
      {({ selected }) => (
        <>
          {children}
          {selected && <Icon name="check" />}
        </>
      )}
    </Combobox.Option>
  )
}

export function MultiSelectComboboxOptions({ children, ...props }: ComboboxOptionsProps<'ul'>) {
  const { floating } = React.useContext(ComboboxContext)

  return (
    <Combobox.Options
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
      {(bag) => <ul className="min-h-0 overflow-auto p-2">{isFunction(children) ? children(bag) : children}</ul>}
    </Combobox.Options>
  )
}

export function MultiSelectComboboxSelectedItem({
  children,
  onRemoveClicked,
}: {
  children: React.ReactNode
  onRemoveClicked?: () => void
}) {
  return <Chip onDelete={onRemoveClicked}>{children}</Chip>
}

export function MultiSelectComboboxSelectedList({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap gap-2">{children}</div>
}

export function MultiSelectCombobox<TValue>(props: Omit<ComboboxProps<TValue, false, true, 'div'>, 'multiple'>) {
  const floating = useFloating<HTMLDivElement>({
    strategy: 'fixed',
    middleware: [
      floatingSize({
        apply({ availableWidth, rects, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
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
    <ComboboxContext.Provider value={{ floating }}>
      <Combobox as="div" className="relative flex flex-col gap-y-3" multiple {...props} />
    </ComboboxContext.Provider>
  )
}

MultiSelectCombobox.Input = MultiSelectComboboxInput
MultiSelectCombobox.Options = MultiSelectComboboxOptions
MultiSelectCombobox.Option = MultiSelectComboboxOption
MultiSelectCombobox.SelectedList = MultiSelectComboboxSelectedList
MultiSelectCombobox.SelectedItem = MultiSelectComboboxSelectedItem
