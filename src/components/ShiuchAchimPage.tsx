
import { ResultsTable } from './ResultsTable'
import { Header } from './Header'
import { CustomSelect } from './common/Select'
import { useDataContext } from '../DataContext'
import {Spinner} from './common/Spinner'

export const ShiuchAchimPage = () => {

const { setSelected, resultData, isLoading} = useDataContext()
const headerTitles = ["name", "email", "phone", "date", ""]

  return (
    <div className="p-8">
      <Header text="שיוך ילדים" />
      <CustomSelect setSelected={(value) => setSelected(value)} />
      {isLoading ? <Spinner/>:null}
      {resultData ? <ResultsTable results={resultData} headerTitles={headerTitles} /> : null}
    </div>)
}
