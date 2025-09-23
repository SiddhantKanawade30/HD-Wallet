import { SolanaWallet } from "@/logic/sol";
import { EthereumWallet } from "@/logic/eth";

type WalletItem = { mnemonic: string; publicKey: string; privateKey: string };

export const Wallet = ({blockchain, keyPhrase}: {blockchain: string | null, keyPhrase: string | null}) => {
  let wallets: WalletItem[] = [];

  if (blockchain === "SOLANA") {
    wallets = SolanaWallet({ keyPhrase });
  }
  if (blockchain === "ETHEREUM") {
    wallets = EthereumWallet({ keyPhrase });
  }


  return (
    <div className="flex flex-col gap-2">
        <div className="text-sm text-white/80">{wallets[0].mnemonic}</div>
      {Array.isArray(wallets) && wallets.map((wallet) => (
        <div key={wallet.publicKey} className="flex flex-col gap-2 bg-white/10 p-4 rounded-md">
          

          <div className="text-sm text-white/80">{wallet.publicKey}</div>
          <div className="text-sm text-white/80">{wallet.privateKey}</div>
        </div>
      ))}
    </div>
  )
}