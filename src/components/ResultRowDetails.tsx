import { RefObject } from 'react'
import { useDataContext } from '../DataContext'
import { Button } from "./common/Button"

export const ResultRowDetails = ({ contentSpace, height, content="content" }: { contentSpace: RefObject<HTMLDivElement>, height: string, content?:string }) => {
    const {selected} = useDataContext() 
    return (
        <div
            ref={contentSpace}
            style={{ maxHeight: `${height}` }}
            className=" bg-white border-b border-slate-300 overflow-auto transition-max-height duration-700 ease-in-out overflow-hidden"
        >
            <div className="flex pb-10 justify-between align-center px-4">
                <div>{content}</div>
               {selected ==='new' ?<div className='flex gap-8 px-4'>
                <Button color="primary" text='accept'/>
                <Button color="destroy" text="reject" />
                    {/* <button className='roundButton color6 text-white'>accept</button>
                    <button className='roundButton'>reject</button> 
                    <Button variant={"destroy"}/>{"reject"}</Button>*/}

                </div>: null}
            </div>
        </div>

    )
}
