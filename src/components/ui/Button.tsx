    

 export const Button = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="bg-white text-black px-4 py-2 rounded-md z-12">
      {children}
    </div>
  )
 }