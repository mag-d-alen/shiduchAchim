import type { UseFloatingReturn } from '@floating-ui/react-dom'
import { autoUpdate, offset, useFloating, size as floatingSize, autoPlacement } from '@floating-ui/react-dom'
import type {
  ComboboxButtonProps,
  ComboboxInputProps,
  ComboboxOptionProps,
  ComboboxOptionsProps,
  ComboboxProps,
} from '@headlessui/react'
import { Combobox as ComboboxPrimitive } from '@headlessui/react'
import type { VariantProps } from 'class-variance-authority'
import clsx from 'clsx'
import { isFunction } from 'lodash'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { input } from '../../electrons/input'
import { listbox, listboxItem } from '../../electrons/listbox'
import { Icon } from '../icon/icon'

const ComboboxContext = React.createContext<{ floating?: UseFloatingReturn<HTMLDivElement> }>({
  floating: undefined,
})

export function ComboboxInput<T = string>({
  size,
  intent,
  ...props
}: ComboboxButtonProps<'button'> & Omit<ComboboxInputProps<'input', T>, 'size'> & VariantProps<typeof input>) {
  const { floating } = React.useContext(ComboboxContext)

  return (
    <div className="relative flex">
      <ComboboxPrimitive.Input
        className={twMerge(input({ size, intent }), 'flex-1 pl-14')}
        ref={floating?.reference}
        {...props}
      />
      <ComboboxPrimitive.Button className="absolute inset-y-0 left-0 px-8 text-slate-600 disabled:cursor-not-allowed disabled:text-grey-400">
        {({ open }) => (
          <Icon className={clsx('h-4 w-4 transition-transform', open && 'rotate-180')} name="chevron-down" />
        )}
      </ComboboxPrimitive.Button>
    </div>
  )
}

export function ComboboxOption<T = string>({ children, ...props }: ComboboxOptionProps<'li', T>) {
  return (
    <ComboboxPrimitive.Option className={listboxItem()} {...props}>
      {({ selected }) => (
        <>
          {children}
          {selected && <Icon name="check" />}
        </>
      )}
    </ComboboxPrimitive.Option>
  )
}

export function ComboboxOptions({ children, ...props }: ComboboxOptionsProps<'ul'>) {
  const { floating } = React.useContext(ComboboxContext)

  return (
    <ComboboxPrimitive.Options
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
    </ComboboxPrimitive.Options>
  )
}

export function Combobox<TValue>(props: Omit<ComboboxProps<TValue, false, false, 'div'>, 'multiple'>) {
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
      <ComboboxPrimitive as="div" className="relative flex flex-col gap-y-3" multiple={false} {...props} />
    </ComboboxContext.Provider>
  )
}

Combobox.Input = ComboboxInput
Combobox.Options = ComboboxOptions
Combobox.Option = ComboboxOption
