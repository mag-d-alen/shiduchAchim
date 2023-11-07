import { ReactNode, forwardRef } from 'react'

export type ToggleProps = {
    height: string,
    children: ReactNode

}

export const Toggle = forwardRef<HTMLDivElement, ToggleProps>(({ height, children }, ref) => {
    return (
        <div
            className="w-full bg-white border-b border-slate-300 overflow-auto transition-max-height duration-700 ease-in-out overflow-hidden"
            style={{ maxHeight: `${height}` }}>
            <div ref={ref} className="w-full flex pb-10 justify-between align-center px-4">
                {children}
            </div>
        </div>
    )
})
