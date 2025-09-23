import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import HDKey from "hdkey";
import Wallet from "ethereumjs-wallet";



export const EthereumWallet = ({keyPhrase}: {keyPhrase?: string | null}) => {
    if (keyPhrase) {
        const seed = mnemonicToSeedSync(keyPhrase);
        const hdwallet = HDKey.fromMasterSeed(seed);
        return generateEthereumWallets(hdwallet, keyPhrase);
    } else {
        const mnemonic = generateMnemonic();
        const seed = mnemonicToSeedSync(mnemonic);
        const hdwallet = HDKey.fromMasterSeed(seed);
        return generateEthereumWallets(hdwallet, mnemonic);
    }
}

    
const generateEthereumWallets = (hdwallet: HDKey, mnemonic: string) =>{
    const wallets: Array<{ mnemonic: string; publicKey: string; privateKey: string }> = [];
    for(let i = 0 ; i < 4 ; i++){    
        const path = `m/44'/60'/0'/0/${i}`
        const node = hdwallet.derive(path);
        if (!node.privateKey) {
          continue;
        }
        const walletInstance = Wallet.fromPrivateKey(node.privateKey);
        wallets.push({
            mnemonic,
            publicKey: walletInstance.getAddressString(),
            privateKey: walletInstance.getPrivateKeyString()
        });
    }
    return wallets;
}


