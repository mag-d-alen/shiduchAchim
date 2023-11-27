
import { CustomSelect } from '../common/Select'
import { Header } from '../common/Header'
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { Spinner } from '../common/Spinner';
import { DataType } from '../../types';
import { Table } from '../atoms/Table';
import { ResultRow } from '../common/ResultRow';
import { Button } from '../atoms/Button';
import { SHIUCH_AHIM_URL } from '../../constants';



export const ShiuchAchimPage = () => {

  const [selected, setSelected] = useState("")
  const data = useLoaderData() as { [key: string]: DataType[] };
  const headerTitles = ["שם המבקש", "אימייל", "טלפון", "תאריך הבקשה"]
  const options = [{ value: "new", label: "new" }, { value: "approved", label: "approved" }, { value: "rejected", label: "rejected" }, { value: "kids", label: "suggestions" }]


  return (
    <div className="p-8">
      <Header text="שיוך ילדים" />
      <CustomSelect setSelected={(value) => setSelected(value)} options={options} />
      {selected ?
        data ?
          <Table headerTitles={headerTitles}>
            {data[selected].map(result => 
            <ResultRow key={result.id} result={result}>
              {selected == 'new' ? <div className='flex gap-8 px-4'>
                <Button intent={"primary"}>accept</Button>
                <Button intent={"destroy"}>reject</Button>
              </div> : null}
            </ResultRow>)}
          </Table>
          : <Spinner />
        : null}
    </div>)
}


export const shiuchAchimRequestsLoader = async () => {
  const response = await fetch(SHIUCH_AHIM_URL);
  if (!response.ok) throw new Error('Failed to fetch data');
  const data = await response.json();
  return data
}
