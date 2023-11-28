import { useState } from 'react'
import { CustomForm } from './common/Form'
import { CustomSelect } from './common/Select'
import { Input } from './atoms/Input'
import { Modal } from './common/Modal'

const generOptions = [{ value: 1, label: "זכר" }, { value: 2, label: "נקבה" }]
const gradeOptions = [
    { label: 'א׳', value: 1 },
    { label: 'ב׳', value: 2 },
    { label: 'ג׳', value: 3 },
    { label: 'ד׳', value: 4 },
    { label: 'ה׳', value: 5 },
    { label: 'ו׳', value: 6 },
    { label: 'ז׳', value: 7 },
    { label: 'ח׳', value: 8 },
    { label: 'ט׳', value: 9 },
    { label: 'י׳', value: 10 },
    { label: 'יא׳', value: 11 },
    { label: 'יב׳', value: 12 },
    { label: 'יג׳', value: 13 },
    { label: 'יד׳', value: 14 },
    { label: 'טו׳', value: 15 }
];
const inputFields = [
    { name: "firstName", label: 'שם פרטי' },
    { label: 'שם משפחה', name: "lastName" },
    { label: 'ת.ז.', name: "id" },
    { label: 'קן', name: "ken" },
    { label: 'טלפון', name: "phone" }
]

export const CreateChildForm = () => {
    const [formData, setFormData] = useState({})

    const handleFormInput = ({ name, value }: { name: string, value: string }) => {
        setFormData({ ...formData, [name]: value })
    }
    const submitData = () => console.log(formData)

    return (  
        <Modal buttonText={"צור חניך חדש"} submitData={submitData} title={"צור חניך חדש"} clearData ={()=>setFormData({})}>
            <CustomForm>
                {inputFields.map(f => <Input placeholder={f.label} key={f.name} onChange={(e: any) => handleFormInput({ name: f.name, value: e.target.value })} />)}
                <CustomSelect setSelected={(value:string)=>handleFormInput({name: "gender", value:value})} placeholder="מין" options={generOptions} withIcon={false} />
                <Input onChange={(e: any) => handleFormInput({ name: "birthday", value: e.target.value })} type={"date"} placeholder='תאריך יום הולדת' />
                <CustomSelect setSelected={(value:string)=>handleFormInput({name: "layer", value:value})} placeholder="שכבה" options={gradeOptions} withIcon={false} />
            </CustomForm>
        </Modal>)
}


