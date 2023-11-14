
import { CustomSelect } from './common/Select'
import { Header } from './common/Header'
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { Spinner } from './common/Spinner';
import { ShiuchInstanceType } from '../types';
import { Table } from './atoms/Table';
import { ResultRow } from './ResultRow';
import { Button } from './atoms/Button';



export const ShiuchAchimPage = () => {

  const [selected, setSelected] = useState("")
  const data = useLoaderData() as { [key: string]: ShiuchInstanceType[] };
  const headerTitles = ["name", "email", "phone", "date", ""]

  return (
    <div className="p-8">
      <Header text="שיוך ילדים" />
      <CustomSelect setSelected={(value) => setSelected(value)} />
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
