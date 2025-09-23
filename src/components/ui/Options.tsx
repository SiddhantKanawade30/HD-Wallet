import { Button } from "./Button";

enum Blockchain {
  SOLANA = "SOLANA",
  ETHEREUM = "ETHEREUM",
}

export const Options = ({setBlockchain}: {setBlockchain: (blockchain: Blockchain) => void}) => {
  return (
    <div className="flex gap-2 pt-10">
        <Button onClick={() => setBlockchain(Blockchain.SOLANA)}>Solana</Button>
        <Button onClick={() => setBlockchain(Blockchain.ETHEREUM)}>Ethereum</Button>
    </div>
  )
}