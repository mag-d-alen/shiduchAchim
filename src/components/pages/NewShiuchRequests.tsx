
import { useLoaderData } from 'react-router-dom'
import { ResultsTable } from '../ResultsTable'
import { Spinner } from '../common/Spinner'

export const NewShiuchRequests = () => {
  const headerTitles = ["name", "email", "phone", "date", ""]

  const resultData = useLoaderData()
  return (
    <div className="p-8">
      {resultData ? <ResultsTable results={resultData.new} headerTitles={headerTitles} /> : <Spinner />}
    </div>)
}

