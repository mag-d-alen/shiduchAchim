import { twMerge } from 'tailwind-merge'

export function Table({ children, className, ...props }: React.HTMLProps<HTMLTableElement>) {
  return (
    <div className={twMerge('min-w-full overflow-hidden rounded ring-1 ring-slate-400', className)}>
      <table className="w-full divide-y divide-slate-400 bg-white" {...props}>
        {children}
      </table>
    </div>
  )
}

export function TableTHead({ children, ...props }: React.HTMLProps<HTMLTableSectionElement>) {
  return <thead {...props}>{children}</thead>
}

export function TableTBody({ children, ...props }: React.HTMLProps<HTMLTableSectionElement>) {
  return <tbody {...props}>{children}</tbody>
}

export function TableTd({ children, ...props }: React.HTMLProps<HTMLTableCellElement>) {
  return (
    <td className="py-4 px-4 text-slate-900" {...props}>
      {children}
    </td>
  )
}

export function TableTh({ children, ...props }: React.HTMLProps<HTMLTableHeaderCellElement>) {
  return (
    <th className="py-3 px-4 text-start text-sm font-medium text-slate-600" {...props}>
      {children}
    </th>
  )
}

export function TableTr({ children, className, ...props }: React.HTMLProps<HTMLTableRowElement>) {
  return (
    <tr className={twMerge('', className)} {...props}>
      {children}
    </tr>
  )
}

Table.Tr = TableTr
Table.Th = TableTh
Table.Td = TableTd
Table.TBody = TableTBody
Table.THead = TableTHead
