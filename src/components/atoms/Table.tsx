import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'



interface CustomTableProps {
  headerTitles: string[];
  children?: ReactNode | ReactNode[];
  withButton?:boolean;
}


//define row 


const BaseTableRow = (
  { children,   as, ...props }: any,
   ref: React.ForwardedRef<HTMLDivElement>
) => {
  const Component = as || 'div'
  const length =  React.Children.count(children) 
  return (
    <Component  className={`grid grid-cols-${length}`} ref={ref} {...props} >
      {children}
    </Component>
  )
}

export const TableRow = React.forwardRef(BaseTableRow) as (
  props: React.HTMLProps<HTMLDivElement>& {
    ref?: React.ForwardedRef<HTMLDivElement>
  }
) => ReturnType<typeof BaseTableRow>


//define table cells

export const TableTh = ({ children, ...props }: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div className=" flex flex-column py-3 px-5 text-start text-sm font-medium text-blue" {...props}>
      {children}
    </div>
  )
}

export const TableTd = ({ children, ...props }: React.HTMLProps<HTMLDivElement>)=>{
  return (
    <div className=" flex flex-column py-4 px-4 text-slate-900" {...props}>
      {children}
    </div>
  )
}

//define table

export const Table = ({ headerTitles,  withButton= true, children }: CustomTableProps) => {
  return (
    <div className="w-full bg-white">
      <header className={`grid grid-cols-${headerTitles.length} mt-10 text-sm text-right border-b border-slate-400`}>       
        {headerTitles.map((header: string) => (
          <TableTh key={header}>
            {header}
          </TableTh>))}
          {withButton ? <TableTh/>: null}
      </header>
        {children}
    </div>
  );
}




