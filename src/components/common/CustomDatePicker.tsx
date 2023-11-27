import { useState } from "react"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const CustomDatePicker = ({ placeholder, title }: { placeholder: string, title?: string }) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    return (

        <DatePicker
            title={title}
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            locale="he-IL"
            className=" w-full px-4 h-12 box-border min-w-0 flex-shrink-0 bg-white flex flex-1 justify-between font-medium items-center border-2 rounded-full outline-none text-slate-600 placeholder:text-grey-400"
            placeholderText={placeholder}
        />

    );

}
