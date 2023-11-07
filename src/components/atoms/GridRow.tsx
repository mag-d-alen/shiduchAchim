import { cva } from 'class-variance-authority';
import React, { HTMLProps, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';


type GridRowProps<T extends React.ElementType>={
  content: any;
  as?: T;
} & Omit<HTMLProps<HTMLDivElement>, 'as'>;


const gridRowConfig = cva({
  base: 'flex items-center px-4 py-8',
});


export const GridRow  = forwardRef<HTMLDivElement, GridRowProps<any>>(
  ({ as: Component = 'div',content,className,...props},ref) => {
      const inputClasses = twMerge(gridRowConfig(), className);
      return <Component className={inputClasses} ref={ref} {...props}>{content}</Component>;
  }
);
