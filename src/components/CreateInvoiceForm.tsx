import React, { useEffect } from 'react'
import { useState } from 'react'
import { CustomForm } from './common/Form'
import { CustomSelect } from './common/Select'
import { Input } from './atoms/Input'
import { Modal } from './common/Modal'
import { ToastToggle } from 'flowbite-react/lib/esm/components/Toast/ToastToggle'




export const CreateInvoiceForm = ({ title }: { title: string }) => {
    const todaysDate = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Jerusalem' })
    const [formData, setFormData] = useState({"date":todaysDate})
    useEffect(() => {
        if(formData.date) return
       setFormData({ ...formData, "date": todaysDate })
    })

    const inputFields = [
        { name: "amount", label: 'סכום' },
        { label: "מס' אסמכתא", name: "reference" },
        { label: 'הערה', name: "notes" },
    ]
    const handleFormInput = ({ name, value }: { name: string, value: string }) => {
        setFormData({ ...formData, [name]: value })
    }
    const submitData = () => console.log(formData)
    return (
        <Modal buttonText={"צור חניך חדש"} submitData={submitData} title={title} clearData={() => setFormData({})}>
            <CustomForm>
                {inputFields.map(f => <Input placeholder={f.label} key={f.name} onChange={(e: any) => handleFormInput({ name: f.name, value: e.target.value })} />)}
                <Input onChange={(e: any) => handleFormInput({ name: "date", value: e.target.value })} value={todaysDate} type={"date"} placeholder='תאריך' />
            </CustomForm>
        </Modal>)
}


