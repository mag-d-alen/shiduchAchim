import { useRef, useState } from "react"
import { ToggleButton } from "./common/ToggleButton"
import { GridRow } from "./common/GridRow"
import { ResultRowDetails } from "./ResultRowDetails"
import { ShiuchInstanceType } from "../types"

export const ResultRow = ({ result }: { result: ShiuchInstanceType }) => {
  const [active, setActive] = useState(false)
  const [height, setHeight] = useState('0px')
  const [rotate, setRotate] = useState('transform duration-700 ease')

  const contentSpace = useRef<HTMLDivElement>(null)
const displayResult = (({ id, ...rest }) => rest)(result)

  function toggleDetails() {
    setActive((prevState) => !prevState)
    // @ts-ignore
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight}px`)
    setRotate(active ? 'transform duration-700 ease' : 'transform duration-700 ease rotate-180')
  }

  return (
    <>
      <div className={`grid grid-cols-5 text-sm text-right rounded-lg `}>
        {Object.values(displayResult).map(item => <GridRow key={item.toString()} text={item.toString()} />)}
        <ToggleButton clickHandler={toggleDetails} rotate={rotate} />
      </div>
      <ResultRowDetails contentSpace={contentSpace} height={height} />
    </>
  )
}
