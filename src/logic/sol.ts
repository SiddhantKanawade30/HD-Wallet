import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";



export const SolanaWallet = ({keyPhrase}: {keyPhrase?: string}) => {

    if(keyPhrase){
        const seed = mnemonicToSeedSync(keyPhrase);
        logic(seed, keyPhrase);
    }else{
        const mnemonic = generateMnemonic();
        const seed = mnemonicToSeedSync(mnemonic);
        logic(seed, mnemonic);
    }
}



const logic = (seed: Buffer, mnemonic: string) =>{
    for (let i = 0; i < 4; i++) {
        const path = `m/44'/501'/${i}'/0'`;

        const derivedSeed = derivePath(path, seed.toString("hex")).key

        const keypair = nacl.sign.keyPair.fromSeed(new Uint8Array(derivedSeed))

        const SolanaKeyPair = Keypair.fromSecretKey(keypair.secretKey);

        const secret = bs58.encode(SolanaKeyPair.secretKey)

        console.log(`Account ${i}:`);
        console.log(`Mnemonic: ${mnemonic}`);
        console.log(`Public Key : ${SolanaKeyPair.publicKey.toBase58()}`);
        console.log(`Secret Key: ${secret}`);

        return {
            mnemonic,
            publicKey: SolanaKeyPair.publicKey.toBase58(),
            privateKey: secret
        }

    }
}

SolanaWallet({keyPhrase: "test"})