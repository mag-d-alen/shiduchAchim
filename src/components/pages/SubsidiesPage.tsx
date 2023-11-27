import { PAYMENTS_URL } from '../../constants';
import { Header } from '../common/Header';
import { ResultRow } from '../common/ResultRow';
import { useLoaderData } from 'react-router-dom';
import { DataType } from '../../types';
import { Table } from '../atoms/Table';
import { Spinner } from '../common/Spinner';
import { Button } from '../atoms/Button';
import { CustomSelect } from '../common/Select';
import { Input } from '../atoms/Input';

export const SubsidiesPage = () => {
  // const data = useLoaderData() as { [key: string]: DataType[] };
  const headerTitles = ["שם המבקש", "אימייל", "טלפון", "תאריך הבקשה"]
  const options = [{ value: "new", label: " סיבסודים לארועים שיתקיימו" }, { value: "approved", label: "סיבסודים לארועים מחודשיים אחרונים" }]


  return (
    <div className="p-8">
      {/* <Header text="היסטורית תשלומים" /> */}
      <Header text='סבסודים' />
      <div className='flex flex-col w-1/2 py-4'>
        <CustomSelect options={options} setSelected={() => { }} />
        <div className='flex gap-4 py-4 items-center'>
            <Input placeholder="אירוע" />
            <Input placeholder="ילד" />
          <Button>{"חפש"}</Button>
        </div>
        {/* {data ?
        <Table headerTitles={headerTitles}>
          <div></div>
          {data.map(result =>
            <ResultRow key={result.id} result={result}>
              ? <div className='flex gap-8 px-4'>
                <Button intent={"primary"}>accept</Button>
                <Button intent={"destroy"}>reject</Button>
              </div> : 
            </ResultRow>
        </Table>): null} */}
      </div>


    </div>)
}


export const subsidiesLoader = async () => {
  const response = await fetch(PAYMENTS_URL);
  if (!response.ok) throw new Error('Failed to fetch data');
  const data = await response.json();
  return data
}
