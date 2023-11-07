import clsx from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

function CardBody({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={twMerge('p-8', className)}>{children}</div>
}

function CardFooter({ children }: { children: React.ReactNode }) {
  return <footer className="rounded-b-xl border-t border-grey-200 py-4 px-6">{children}</footer>
}

function CardHeader({
  title,
  slotStart,
  slotEnd,
}: {
  title: React.ReactNode | string
  slotStart?: React.ReactNode
  slotEnd?: React.ReactNode
}) {
  return (
    <header className="flex items-center justify-between rounded-t-xl border-b border-grey-200 py-4 px-6">
      <div className="flex items-center gap-x-3">
        {slotStart}
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      {slotEnd}
    </header>
  )
}

export function Card({
  children,
  isHighlighted,
  className,
}: {
  children: React.ReactNode
  isHighlighted?: boolean
  className?: string
}) {
  return (
    <article
      className={twMerge(
        clsx('rounded-xl border bg-white shadow', isHighlighted ? 'border-blue-500' : 'border-slate-300'),
        className
      )}
    >
      {children}
    </article>
  )
}

Card.Body = CardBody
Card.Footer = CardFooter
Card.Header = CardHeader
