import { cva } from "class-variance-authority";
import React, { forwardRef, HTMLProps} from 'react';
import { twMerge } from 'tailwind-merge';


// define interfaces

type FormProps<T extends React.ElementType> = {
    intent: 'default' | 'error';
    size?: 'md' | 'lg';
    type: 'text' | 'number' | 'password';
    as?: T;
} & Omit<HTMLProps<HTMLInputElement>, 'as'>;

type CompoundFormProps<T extends React.ElementType<typeof formConfig>> = FormProps<T> &
    Omit<React.ComponentPropsWithRef<T>, keyof FormProps<T>>


// define  variants

const formConfig = cva(
    'box-border min-w-0 flex-shrink-0 bg-white flex flex-col flex-1 justify-between font-medium gap-2',
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

    export const CustomForm = forwardRef<HTMLFormElement, CompoundFormProps<any>>(
        ({ as: Component = 'form', intent, size, type = 'text', className, children, ...props }, ref) => {
            const formClasses = twMerge(formConfig({ intent, size }), className);
         

            return(
            <Component type={type} className={formClasses} ref={ref} {...props}>
                {children}
            </Component>)
        }
    );

