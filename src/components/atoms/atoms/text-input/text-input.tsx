import type { VariantProps } from 'class-variance-authority'
import React from 'react'
import { input } from '../../electrons/input'
import { FormControl } from '../form-control/form-control'

export function TextInput({
  intent,
  size,
  ...props
}: Omit<React.HTMLProps<HTMLInputElement>, 'size'> & VariantProps<typeof input>) {
  const { errorMessage, errorId } = FormControl.useContext()

  return (
    <input
      aria-errormessage={errorId}
      aria-invalid={!!errorMessage}
      className={input({ size, intent: errorMessage ? 'error' : intent })}
      {...props}
    />
  )
}
