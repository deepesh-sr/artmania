

const Transition = ({children} :{ children : React.ReactNode}) => {
  return (
    <div>
        <div className=" h-screen w-full flex flex-col">
            <div className="h-1/6 bg-red-900 "></div>
            <div className="h-1/6 bg-blue-600 "></div>
            <div className="h-1/6 bg-red-900 "></div>
            <div className="h-1/6 bg-blue-600 "></div>
            <div className="h-1/6 bg-red-900 "></div>
            <div className="h-1/6 bg-blue-600 "></div>
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Transition