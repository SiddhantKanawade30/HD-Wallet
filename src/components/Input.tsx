import { Button } from "./ui/Button"
import { useRef } from "react"

export const Input = ({placeholder, onClick}: {placeholder: string, onClick: (seedPhrase: string) => void}) => {

const seedPhrase = useRef<string>("");


  return (
    <div className="flex items-center gap-2 ">
      <input type="text" placeholder={placeholder} className="px-3 py-2 rounded-md bg-white/90 text-black outline-none my-4" size={150} onChange={(e) => seedPhrase.current = e.target.value} />
      <Button onClick={() => onClick(seedPhrase.current)}>Generate</Button>
    </div>
  )
}


