
import Select from 'react-select'
import { DropdownIndicator } from "./DropdownIndicator"
import { options } from '../../constants'



export const CustomSelect = ({ setSelected, placeholder }: { setSelected: ( value:string) => void, placeholder?:string }) => {
    const styles = {
        option: (styles: { key: string, props: Object }, { data, isDisabled, isFocused, isSelected }:{data:any, isDisabled:boolean, isFocused:boolean, isSelected:boolean}) => {
            return {
                ...styles, 
                backgroundColor:isSelected ? "#306FB6":"inherit" ,
                color:isSelected ? "white":'black',
                cursor: isDisabled ? 'not-allowed' : 'default',
            }
        }, 
        menu: (styles: { key: string, props: Object }) => ({ ...styles, borderRadius: '2rem' }),
        menuList: (styles: { key: string, props: Object }) => ({ ...styles, borderRadius: '2rem' , padding:'0'}),
        valueContainer: (styles: { key: string, props: Object }) => ({ ...styles, borderRadius: '2rem' }),
        control: (styles: { key: string, props: Object }) => ({ ...styles, borderRadius: '2rem', textAlign: 'right', padding: '0.5rem 0.5rem 0.5rem 1rem ', border: '2px solid black' }),
    }
    return (
        <div>
            <Select components={{ DropdownIndicator }}
                options={options} styles={styles} placeholder={placeholder ? placeholder : null} onChange={selected => setSelected(selected.value)} />

        </div>
    )
}
