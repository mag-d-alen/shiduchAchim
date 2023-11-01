

import { useLoaderData } from 'react-router-dom'
import { ResultsTable } from '../ResultsTable'
import { Spinner } from '../common/Spinner'

export const RejectedShiuchRequests = () => {
  const headerTitles = ["name", "email", "phone", "date", ""]

  const resultData = useLoaderData()
  return (
      <div className="p-8">
        {resultData ? <ResultsTable results={resultData.rejected} headerTitles={headerTitles} /> : <Spinner/>} 
      </div>)
  }
  
