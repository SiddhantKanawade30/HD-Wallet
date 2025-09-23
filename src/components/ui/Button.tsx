    

 export const Button = ({children, onClick}: {children: React.ReactNode, onClick: () => void}) => {
  return (

    <button className="cursor-pointer" onClick={onClick}>
    <div className="bg-white text-black px-4 py-2 rounded-md z-12">
      {children}
    </div>
    </button>
  )
 }