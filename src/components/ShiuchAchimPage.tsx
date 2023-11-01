
import { CustomSelect } from './common/Select'
import { Header } from './common/Header'
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'


export const ShiuchAchimPage = () => {
  const [selected, setSelected] = useState("")
  const navigate = useNavigate()
  
  useEffect(() => {
    navigate(`/${selected}`)
  }, [selected])

  return (
    <div className="p-8">
      <Header text="שיוך ילדים" />
      <CustomSelect setSelected={(value) => setSelected(value)} />
      <Outlet />
    </div>)
}
