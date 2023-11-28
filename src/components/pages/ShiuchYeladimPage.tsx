import { SHIUCH_YELADIM_URL } from '../../constants'
import { useLoaderData } from 'react-router-dom';
import { DataType } from '../../types';
import { Header } from '../common/Header';
import { Input } from '../atoms/Input';
import { CreateChildForm } from '../CreateChildForm';

export const ShiuchYeladimPage = () => {
    const data = useLoaderData() as { [key: string]: DataType[] };
    return (
        <div className="p-8 ">
            <Header text={"שיוך/עידכון הורים וילדים"} />
            <div className="flex flex-col  w-1/2  mt-2  gap-2">
                <Input placeholder="חניך" />
                <Input placeholder="הורה" />
                    <CreateChildForm/>
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
