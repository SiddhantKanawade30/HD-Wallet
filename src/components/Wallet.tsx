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
    <div>
      {Array.isArray(wallets) && wallets.map((wallet) => (
        <div key={wallet.publicKey} className="flex flex-col gap-2">
          <div>{wallet.publicKey}</div>
          <div>{wallet.privateKey}</div>
        </div>
      ))}
    </div>
  )
}