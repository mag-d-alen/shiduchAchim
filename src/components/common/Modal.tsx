import { ReactNode, useState } from 'react'
import { Button } from '../atoms/Button'



export const Modal = ({ buttonText, children, submitData }: { buttonText: string, children: ReactNode, submitData: any }) => {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            {!showModal ?
                <Button intent={"primary"} onClick={() => setShowModal(true)} >
                    {buttonText}
                </Button>
                : (
                    <div className="flex bg-black bg-opacity-75 overflow-y-auto overflow-x-hidden fixed top-0 right-0 z-50 justify-center h-full w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div className=" w-1/2 h-fit top-36 relative  p-4 md:p-5 bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5">
                                <button onClick={() => setShowModal(false)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {children}
                            <div className="flex items-center justify-center py-12 gap-5">
                                <Button onClick={()=>{submitData(); setShowModal(false)}} intent="primary">{"אשר"}</Button>
                                <Button onClick={() => setShowModal(false)} intent={"destroy"}>{"בטל"}</Button>
                            </div>
                        </div>
                    </div>)}
        </>)
}

export const ModalBody = ({ children }: { children?: ReactNode }) => {
    return (
        <div className="space-y-4 flex flex-col items-center justify-center">
            {children}
        </div>)
}



