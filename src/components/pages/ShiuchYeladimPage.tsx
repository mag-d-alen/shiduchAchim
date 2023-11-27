import { SHIUCH_YELADIM_URL } from '../../constants'
import { useLoaderData } from 'react-router-dom';
import { DataType } from '../../types';
import { Header } from '../common/Header';
import { Input } from '../atoms/Input';
import { Modal } from '../common/Modal';
import { CustomSelect } from '../common/Select';
import { CustomDatePicker } from '../common/CustomDatePicker';

export const ShiuchYeladimPage = () => {
    const data = useLoaderData() as { [key: string]: DataType[] };
    const generOptions = [{value:1, label:"זכר"}, {value:2, label:"נקבה"}]
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
    const submitData = () => console.log("submit")
    console.log(data)
    return (
        <div className="p-8">
            <Header text={"שיוך/עידכון הורים וילדים"} />
            <div className="flex flex-col  w-1/2">

                <Input placeholder="חניך" />
                <Input placeholder="הורה" />
                <Modal buttonText={"צור חניך חדש"} submitData={submitData}>
                    <div className='flex flex-col w-3/4 gap-2'>
                    <Input placeholder="שם פרטי" />
                    <Input placeholder="שם משפחה" />
                    <Input placeholder="ת.ז." />
                    <CustomSelect  setSelected={()=>{}}placeholder = "מין" options={generOptions} withIcon={false}/>
                    <CustomDatePicker placeholder='תאריך יום הולדת'/>
                    <Input placeholder="קן" />
                    <Input placeholder="טלפון" />
                    <CustomSelect  setSelected={()=>{}}placeholder = "שכבה" options={gradeOptions} withIcon={false}/>
                    </div>

                </Modal>
            </div>

        </div>
    )
}
export const shiuchYeladimLoader = async () => {
    const response = await fetch(SHIUCH_YELADIM_URL)
    if (!response.ok) throw new Error('Failed to fetch data');
    const data = await response.json();
    return data
}
