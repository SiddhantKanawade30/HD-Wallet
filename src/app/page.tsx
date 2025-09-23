"use client"
import { Header } from "@/components/Header";
import { Options } from "@/components/ui/Options";
import { useState } from "react";
import { Input } from "@/components/Input";
import { Wallet } from "@/components/Wallet";

export default function Home() {

enum Blockchain {
  SOLANA = "SOLANA",
  ETHEREUM = "ETHEREUM",
}

const [blockchain, setBlockchain] = useState<Blockchain | null>(null);
const [keyPhrase, setKeyPhrase] = useState<string | null>(null);


return (
  <div>
    <Header blockchain={blockchain} />

    {blockchain === null && (
      <Options setBlockchain={setBlockchain} />
    )}
    {blockchain === Blockchain.SOLANA  && (
      <Input placeholder="Enter your secret recovery phrase" onClick={(keyPhrase) => setKeyPhrase(keyPhrase)} />
    )}
    { blockchain === Blockchain.ETHEREUM && (
      <Input placeholder="Enter your secret recovery phrase" onClick={(keyPhrase) => setKeyPhrase(keyPhrase)} />
    )}
    {(blockchain === Blockchain.SOLANA || blockchain === Blockchain.ETHEREUM) && (
      <Wallet blockchain={blockchain} keyPhrase={keyPhrase} />
    )}
  </div>
)
}