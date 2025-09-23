

export const Header = ({blockchain}: {blockchain: string | null}) => {


  return (
    <div className="flex flex-col pt-17">
      <div className="text-5xl text-white font-bold">
       {blockchain ? "Secret Recovery Phrase" : "Sidd wallet is a HD wallet"}
       

      </div>
      <div className="text-xl text-white/80 pt-3 ">
        {blockchain ? "Enter your secret recovery phrase" : "Choose a blockchain and generate a wallet"}
      </div>
    </div>
  )
}