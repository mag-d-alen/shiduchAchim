import React, { useId } from 'react'
import { twMerge } from 'tailwind-merge'

export const FormControlContext = React.createContext<{
  errorMessage: string | string[]
  label: string
  labelId: string
  errorId: string
}>({
  errorMessage: '',
  label: '',
  labelId: '',
  errorId: '',
})

export const FieldsetContext = React.createContext<{ disabled: boolean | undefined }>({
  disabled: false,
})

function useFormControlContext() {
  return React.useContext(FormControlContext)
}

function useFieldsetContext() {
  return React.useContext(FieldsetContext)
}

export function Fieldset({ className, children, disabled, ...props }: React.HTMLProps<HTMLFieldSetElement>) {
  return (
    <fieldset className={twMerge('flex min-w-0 flex-col gap-y-4', className)} disabled={disabled} {...props}>
      <FieldsetContext.Provider value={{ disabled }}>{children}</FieldsetContext.Provider>
    </fieldset>
  )
}

export function ErrorMessage({ message }: { message: string }) {
  const { errorId, labelId } = useFormControlContext()

  return (
    <em
      aria-labelledby={labelId}
      className="pl-1.5 text-sm font-medium not-italic text-red-500"
      id={errorId}
      role="alert"
    >
      {message}
    </em>
  )
}

export function FormControl({
  label,
  children,
  className,
  errorMessage = '',
  helpText = '',
  htmlFor,
}: {
  label?: string
  htmlFor?: string
  children: React.ReactNode
  className?: string
  errorMessage?: string | string[]
  helpText?: string
}) {
  const labelId = useId()
  const errorId = useId()

  return (
    <div className={twMerge('flex min-w-0 flex-1 flex-col gap-y-1.5', className)}>
      <label className="pl-1.5 text-sm font-medium text-slate-700 rtl:pr-1.5" htmlFor={htmlFor} id={labelId}>
        {label}
      </label>
      <FormControlContext.Provider value={{ errorMessage, label: label ?? '', labelId, errorId }}>
        {children}
        {errorMessage && (
          <div className="flex flex-col">
            <ErrorMessage message={Array.isArray(errorMessage) ? errorMessage[0] : errorMessage} />
          </div>
        )}
      </FormControlContext.Provider>
      {!errorMessage && helpText && <small className="text-xs font-medium text-slate-600">{helpText}</small>}
    </div>
  )
}

FormControl.useContext = useFormControlContext
FormControl.Fieldset = Fieldset
FormControl.useFieldsetContext = useFieldsetContext
