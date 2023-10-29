import { ReactNode, createContext, useContext, useEffect, useState } from "react"
import { FETCH_KIDS_URL, FETCH_SHIUCH_REQUESTS_URL } from "./constants"


type DataProviderProps = {children: ReactNode}

export const DataContext = createContext<any | undefined>(undefined)

const fetchKidsData = async () => {
  const response = await fetch(FETCH_KIDS_URL);
  if (!response.ok) throw new Error('Failed to fetch data');
  const data = await response.json();
  return data.data;
};

const fetchShiuchRequestsData = async () => {
  const response = await fetch(FETCH_SHIUCH_REQUESTS_URL);
  if (!response.ok) throw new Error('Failed to fetch data');
  const data = await response.json();
  return data;
};

export const DataProvider=({children}: DataProviderProps)=> {
const [resultData, setResultData] = useState("")
const [selected, setSelected] = useState("")
const [isLoading, setLoading] = useState(false)
useEffect(() => {
    if (!selected) return;
    setLoading(true)
    const fetchData = async () => {
      const kids = await fetchKidsData()
      const data = await fetchShiuchRequestsData() 
      setResultData(selected === "suggestions" ? kids: data[selected])
    setLoading(false)
    }
    fetchData()
  }, [selected])
  return (
    <DataContext.Provider value={{resultData, isLoading, selected, setSelected}}>
      {children}
    </DataContext.Provider>
  )
}

export const useDataContext = () => useContext(DataContext)








