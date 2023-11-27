import { Table, TableRow, TableTd } from '../atoms/Table'
import { Button } from '../atoms/Button'
import { useState } from 'react'

const mountedStyle = { animation: "inAnimation 500ms ease-in-out" };
const unmountedStyle = {
    animation: "outAnimation 500ms ease-in-out",
    animationFillMode: "forwards"
};
export const PaymentDetails = ({ data }: { data: any }) => {
    const [showInstallments, setShowInstallments] = useState(false)
    const [isMounted, setIsMounted] = useState(true);
    // const paymentHeaders = Object.keys(data.payment_details)
    const paymentHeaders = ["ken", "חניך", "אירוע", "סכום"]




    return (
        <div className="flex flex-col align-center w-full mb-12">
            <Button onClick={() => { setIsMounted(!isMounted); setShowInstallments(!showInstallments) }} intent={"outline"}> {showInstallments ? "ראה פרטי תשלום" : "ראה פרטי הפקדה"}</Button>
            {showInstallments ?
                (<div style={!isMounted ? mountedStyle : unmountedStyle} onAnimationEnd={() => { setShowInstallments(true) }} className="flex flex-col items-right py-8 px-4">
                    <h2 className='py-8 text-blue-400'>פרטי הפקדה</h2>
                    {data.installments_details.map((d: any) => <div key={d.installment_id}><div>{d.installment_id} : {d.installment_amount} nis</div></div>
                    )}
                </div>) : null}
            {!showInstallments ?
                <div style={isMounted ? mountedStyle : unmountedStyle} onAnimationEnd={() => { setShowInstallments(false) }} className="flex flex-col items-right py-8 px-4">
                    <h2 className='py-8 text-blue-400'>פרטי תשלום</h2>
                    <Table withButton={false} headerTitles={paymentHeaders}>
                        <TableRow>
                            {Object.values(data.payment_details).map((item: any, i) => <TableTd key={item + i}>{item}</TableTd>)}
                        </TableRow>
                    </Table>
                </div> : null}
        </div>
    )
}



