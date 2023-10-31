export const Spinner=() =>{
  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center bg-grey-900 bg-opacity-50 backdrop-blur-sm">
      <div className="spinner md:left-[40%]">
        <div className="animate-spin">
          <div className="spinner-element color1 "></div>
          <div className="spinner-element color1"></div>
          <div className="spinner-element color2"></div>
          <div className="spinner-element color2"></div>
          <div className="spinner-element color3"></div>
          <div className="spinner-element color3"></div>
          <div className="spinner-element color4"></div>
          <div className="spinner-element color4"></div>
          <div className="spinner-element color5"></div>
          <div className="spinner-element color5"></div>
          <div className="spinner-element color6"></div>
          <div className="spinner-element color6"></div>
        </div>
      </div>
    </div>
  )
}
