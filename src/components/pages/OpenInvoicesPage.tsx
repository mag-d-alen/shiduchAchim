import { Header } from '../common/Header'
import { INVOICES_URL } from '../../constants'
import { Spinner } from '../common/Spinner'
import { Table } from '../atoms/Table'
import { useLoaderData } from 'react-router'
import { DataType } from '../../types'
import { ResultRow } from '../common/ResultRow'
import { Modal, ModalBody } from '../common/Modal'
import { Input } from '../atoms/Input'
import { PaymentDetails } from './PaymentDetails'

export const OpenInvoicesPage = () => {
  const data = useLoaderData() as { [key: string]: any }[];
  const headerTitles = ["סכום", "סכום שנשאר", "מספר הפקדה", "שם המפקיד", "תאריך הפקדה"]
  return (
    <div className="p-8">
      <Header text={'הפקדות לא סגורות'} />
      {
        data ?
          <Table headerTitles={headerTitles}>
            {data.map((result: DataType) =>
              <ResultRow key={result.basic_data.id} result={result.basic_data}>
                <div className='flex w-full flex-col'>
                  <div className='flex w-full'>
                    <div className='flex flex-row flex-1 justify-center'>
                      <PaymentDetails data={result} />
                    </div>
                    <div className='flex flex-1 flex-row justify-center'>
                      <Modal buttonText={"סגור הפקדה"} submitData={() => console.log("submit")}>
                        <ModalBody>
                          <h1>צור הפקדה חדשה שתסגור את ההפקדה {result.basic_data.id}</h1>
                          <Input></Input>
                          <Input></Input>
                          <Input></Input>
                          <Input></Input>
                        </ModalBody>
                      </Modal></div>
                  </div>
                </div>
              </ResultRow>)}
          </Table>
          : <Spinner />}
    </div>)
}
export const invoicesLoader = async () => {
  const response = await fetch(INVOICES_URL);
  if (!response.ok) throw new Error('Failed to fetch data');
  const res = await response.json();
  const data = res.data.map((payment: any) => { const { payment_details, installments_details, ...rest } = payment; return { payment_details: payment.payment_details, installments_details: payment.installments_details, basic_data: rest } })
  return data
}
