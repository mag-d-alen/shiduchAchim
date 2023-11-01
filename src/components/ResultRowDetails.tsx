import { RefObject } from 'react'
import { Button } from "./common/Button"
import { useLocation } from 'react-router-dom'

export const ResultRowDetails = ({ contentSpace, height, content="content" }: { contentSpace: RefObject<HTMLDivElement>, height: string, content?:string }) => {
    const {pathname} = useLocation()
    return (
        <div
            ref={contentSpace}
            style={{ maxHeight: `${height}` }}
            className=" bg-white border-b border-slate-300 overflow-auto transition-max-height duration-700 ease-in-out overflow-hidden"
        >
            <div className="flex pb-10 justify-between align-center px-4">
                <div>{content}</div>
               {pathname =='/new' ?<div className='flex gap-8 px-4'>
                <Button intent={"primary"}>accept</Button>
                <Button intent={"destroy"}>reject</Button> 
                </div>: null}
            </div>
        </div>

    )
}
