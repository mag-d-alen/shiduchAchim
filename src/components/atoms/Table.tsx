import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'



interface CustomTableProps {
  headerTitles: string[];
  children?: ReactNode | ReactNode[];
  withButton?: boolean;
}


//define row 


const BaseTableRow = (
  { children, as, ...props }: any,
  ref: React.ForwardedRef<HTMLDivElement>
) => {
  const Component = as || 'div'
  return (
    <Component className ="flex flex-row "ref={ref} {...props} >
      {children}
    </Component>
  )
}

export const TableRow = React.forwardRef(BaseTableRow) as (
  props: React.HTMLProps<HTMLDivElement> & {
    ref?: React.ForwardedRef<HTMLDivElement>
  }
) => ReturnType<typeof BaseTableRow>


//define table cells

export const TableTh = ({ children, ...props }: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div className=" flex-1 py-5 px-5 justify-content-center text-sm font-medium text-blue" {...props}>
      {children}
    </div>
  )
}

export const TableTd = ({ children, ...props }: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div className=" flex flex-1 flex-column py-4 px-4 text-slate-900" {...props}>
      {children}
    </div>
  )
}

//define table

export const Table = ({ headerTitles, withButton = true, children }: CustomTableProps) => {
  return (
    <div className="w-full bg-white h-fit">
      <TableRow>
          {headerTitles.map((header: string) => (
            <TableTh key={header}>
              {header}
            </TableTh>))}
          {withButton ? <TableTh /> : null}
      </TableRow>
      {children}
    </div>
  );
}




