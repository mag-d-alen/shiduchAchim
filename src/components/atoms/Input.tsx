import { cva } from "class-variance-authority";
import React, { forwardRef, HTMLProps, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


// define interfaces

type InputProps<T extends React.ElementType> = {
    intent: 'default' | 'error';
    size?: 'md' | 'lg';
    type: 'text' | 'number' | 'password' |'date';
    as?: T;
} & Omit<HTMLProps<HTMLInputElement>, 'as'>;

type CompoundInputProps<T extends React.ElementType<typeof inputConfig>> = InputProps<T> &
    Omit<React.ComponentPropsWithRef<T>, keyof InputProps<T>>


// define  variants

const inputConfig = cva(
    'box-border min-w-0 flex-shrink-0 bg-white flex flex-1 justify-between font-medium items-center border-2 rounded-full outline-none text-slate-600 placeholder:text-grey-400 focus:ring-2 focus:ring-blue-500/10 ui-open:ring-2 ui-open:ring-blue-500/10 disabled:cursor-not-allowed disabled:text-grey-400 transition-all disabled:border-grey-300 disabled:bg-grey-50 rtl:font-afek disabled:grayscale',
    {
        variants: {
            intent: {
                default: 'border-slate-400 focus:border-blue-500',
                error: 'border-red-500 focus:border-red-500',
            },
            size: {
                md: 'text-base py-2 px-6 min-h-[42px]',
                lg: 'text-base py-3 px-8 min-h-[50px]',
            },

        },
        defaultVariants: {
            intent: 'default',
            size: 'md',
        },
    }
)

//define input component

export const Input  = forwardRef<HTMLInputElement, CompoundInputProps<any>>(
    ({ as: Component = 'input', intent, size, type = 'text', className, ...props }, ref) => {
        const inputClasses = twMerge(inputConfig({ intent, size }), className);
        return <Component type={type} className={inputClasses} ref={ref} {...props} />;
    }
);
