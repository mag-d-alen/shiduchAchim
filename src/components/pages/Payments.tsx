import { PAYMENTS_URL } from '../../constants';
import { Table, Button, Spinner } from 'flowbite-react';
import { Header } from '../common/Header';
import { ResultRow } from '../common/ResultRow';
import { CustomSelect } from '../common/Select';
import { useLoaderData } from 'react-router-dom';
import { DataType } from '../../types';

export const Payments = () => {
    const data = useLoaderData() as { [key: string]: DataType[] };
    const headerTitles = ["שם המבקש", "אימייל", "טלפון", "תאריך הבקשה"]

    return (
        <div className="p-8">
            <Header text="שיוך ילדים" />
            {/* <CustomSelect setSelected={(value) => setSelected(value)} /> */}

            {data ?
                <Table headerTitles={headerTitles}>
                    <div></div>
                    {/* {data[selected].map(result => 
          <ResultRow key={result.id} result={result}>
            {selected == 'new' ? <div className='flex gap-8 px-4'>
              <Button intent={"primary"}>accept</Button>
              <Button intent={"destroy"}>reject</Button>
            </div> : null}
          </ResultRow>)} */}
                </Table>
                : <Spinner />}

        </div>)
}


export const paymentsLoader = async () => {
    const response = await fetch(PAYMENTS_URL);
    if (!response.ok) throw new Error('Failed to fetch data');
    const data = await response.json();
    return data
}
