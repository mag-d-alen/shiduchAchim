
export const ToggleButton = ({clickHandler, rotate}:{clickHandler:()=>void, rotate:string}) => {
    return (
        <button className="py-8 box-border appearance-none cursor-pointer focus:outline-none" onClick={clickHandler}>
            <i style={{ color: "gray" }} aria-hidden="true" className={`fa fa-chevron-down inline-block ${rotate}`} />
        </button>)
}