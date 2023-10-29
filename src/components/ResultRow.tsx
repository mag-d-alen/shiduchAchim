import { useRef, useState } from "react"
import { ShiuchRequestType } from "../types"
import { ShiuchDetails } from "./ShiuchDetails"
import { ToggleButton } from "./common/ToggleButton"
import { GridRow } from "./common/GridRow"

export const ResultRow = ({ result }: { result: {key:string, value:string}}) => {
  const [active, setActive] = useState(false)
  const [height, setHeight] = useState('0px')
  const [rotate, setRotate] = useState('transform duration-700 ease')

  const contentSpace = useRef<HTMLDivElement>(null)

  function toggleDetails() {
    setActive((prevState) => !prevState)
    // @ts-ignore
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`)
    setRotate(active ? 'transform duration-700 ease' : 'transform duration-700 ease rotate-180')
  }

  return (
    <>
      <div className={`grid grid-cols-5 text-sm text-right rounded-lg `}>
        {Object.entries(result).map(item=><GridRow text={item.toString()}/>)}
        <ToggleButton clickHandler={toggleDetails} rotate={rotate} />
      </div>
      <ShiuchDetails contentSpace={contentSpace} height={height} />
    </>
  )
}
