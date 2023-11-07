import { useRef, useState } from "react"
import { ToggleButton } from "./common/ToggleButton"
import { ShiuchInstanceType } from "../types"
import { TableRow, TableTd } from "./atoms/Table"
import { Button } from "./atoms/Button"
import { useLocation } from "react-router-dom"
import { Toggle } from "./atoms/Toggle"

export const ResultRow = ({ result }: { result: ShiuchInstanceType }) => {
  const [active, setActive] = useState(false)
  const [height, setHeight] = useState('0px')
  const [rotate, setRotate] = useState('transform duration-700 ease')

  const contentSpace = useRef<HTMLDivElement>(null)
  const displayResult = (({ id, ...rest }) => rest)(result)
  const { pathname } = useLocation()

  function toggleDetails() {
    setActive((prevState) => !prevState)
    // @ts-ignore
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`)
    setRotate(active ? 'transform duration-700 ease' : 'transform duration-700 ease rotate-180')
  }

  return (
    <>
      <TableRow>
        {Object.values(displayResult).map(item =>
          <TableTd key={item}>{item}</TableTd>)}
        <TableTd>
          <ToggleButton clickHandler={toggleDetails} rotate={rotate} />
        </TableTd>
      </TableRow>
      <Toggle height={height} ref={contentSpace}>
        {pathname == '/new' ? <div className='flex gap-8 px-4'>
          <Button intent={"primary"}>accept</Button>
          <Button intent={"destroy"}>reject</Button>
        </div> : null}
      </Toggle>
    </>
  )
}

