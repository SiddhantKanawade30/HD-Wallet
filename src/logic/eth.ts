import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import HDKey from "hdkey";
import Wallet from "ethereumjs-wallet";



export const EthereumWallet = ({keyPhrase}: {keyPhrase?: string}) => {

    if(keyPhrase){
        const seed = mnemonicToSeedSync(keyPhrase);
        const hdwallet = HDKey.fromMasterSeed(seed);
        logic(hdwallet, keyPhrase);
    }else{
   const mnemonic = generateMnemonic();
   const seed = mnemonicToSeedSync(mnemonic);
  const hdwallet = HDKey.fromMasterSeed(seed);
  logic(hdwallet, mnemonic);
    }

}

    
const logic = (hdwallet: HDKey, mnemonic: string) =>{
    for(let i = 0 ; i < 4 ; i++){    
        const path = `m/44'/60'/0'/0/${i}`
        const node = hdwallet.derive(path);
        if (!node.privateKey) {
          continue;
        }
        const wallet = Wallet.fromPrivateKey(node.privateKey);
     
     
     return {
        mnemonic,
        publicKey: wallet.getAddressString(),
        privateKey: wallet.getPrivateKeyString()
     }
        
        }
}


EthereumWallet({keyPhrase: "test"})