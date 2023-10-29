// import { useLoaderData } from "react-router-dom"
// import Select from 'react-select'
// import { useState } from "react"
// import { SelectedKid } from "../SelectedKid"
// import {DropdownIndicator} from "../DropdownIndicator"



// export const Search = ({options}:{options:[{value:string,label:string}]}) => {
//   const loaderData = useLoaderData()
//   const [selectedKid, setSelectedKid] = useState()
//   const allKidOptions = loaderData.products.map((kid: any) => { return { value: kid, label: kid.title } })
//   const colourStyles = {
//     option: (styles: { key: string, props: Object }, { data, isDisabled, isFocused, isSelected }) => {
//       return {
//         ...styles,
//         cursor: isDisabled ? 'not-allowed' : 'default',

//       }
//     },
//     menu: (styles: { key: string, props: Object }) => ({ ...styles, borderRadius: '2rem'}),
//     valueContainer: (styles: { key: string, props: Object }) => ({ ...styles, borderRadius: '2rem'}),
//     control: (styles: { key: string, props: Object }) => ({ ...styles, borderRadius: '2rem', textAlign: 'right', padding: '0.5rem 0.5rem 0.5rem 1rem ', border: '2px solid black' }),
//   }



//   return (
//       <div>
//         {allKidOptions.products ? <Select components={{ DropdownIndicator }}
//           options={options} styles={colourStyles} placeholder="kid's id" onChange={value => setSelectedKid(value)} /> : null}
//         {selectedKid ? <SelectedKid kid={selectedKid.value} /> : null}
//       </div>
//     )
// }
