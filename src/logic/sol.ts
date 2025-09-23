import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";



export const SolanaWallet = ({keyPhrase}: {keyPhrase?: string | null}) => {
    if (keyPhrase) {
        const seed = mnemonicToSeedSync(keyPhrase);
        return generateSolanaWallets(seed, keyPhrase);
    } else {
        const mnemonic = generateMnemonic();
        const seed = mnemonicToSeedSync(mnemonic);
        return generateSolanaWallets(seed, mnemonic);
    }
}



const generateSolanaWallets = (seed: Buffer, mnemonic: string) =>{
    const wallets: Array<{ mnemonic: string; publicKey: string; privateKey: string }> = [];
    for (let i = 0; i < 4; i++) {
        const path = `m/44'/501'/${i}'/0'`;
        const derivedSeed = derivePath(path, seed.toString("hex")).key;
        const keypair = nacl.sign.keyPair.fromSeed(new Uint8Array(derivedSeed));
        const solanaKeyPair = Keypair.fromSecretKey(keypair.secretKey);
        const secret = bs58.encode(solanaKeyPair.secretKey);
        wallets.push({
            mnemonic,
            publicKey: solanaKeyPair.publicKey.toBase58(),
            privateKey: secret
        });
    }
    return wallets;
}