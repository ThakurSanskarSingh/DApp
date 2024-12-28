import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js'
import React, { useState } from 'react'

export const Airdrop = () => {
    const wallet = useWallet()
    const { connection } = useConnection()
    const [amount, setAmount] = useState(1); 

    async function sendAirdropToUser() {
        if (!wallet.connected || !wallet.publicKey) {
            alert("Wallet not connected");
            return;
        }

        try {
            const airdropSignature = await connection.requestAirdrop(
                wallet.publicKey,
                amount * LAMPORTS_PER_SOL 
            );

           
            
            alert(`Airdropped ${amount} SOL to ${wallet.publicKey.toBase58()}`);
        } catch (error) {
            console.error("Airdrop failed", error);
            alert("Airdrop failed");
        }
    }

    return (
        <div className="p-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
    <h3 className="text-lg font-semibold mb-3 text-gray-200">Request Airdrop</h3>
    <div className="flex gap-2">
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="flex-1 p-2 bg-gray-700 text-gray-200 border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-violet-500 placeholder-gray-400"
      />
      <button
        onClick={sendAirdropToUser}
        className="bg-violet-600 text-gray-200 px-4 py-2 rounded hover:bg-violet-700 transition-colors"
      >
        Send Airdrop
      </button>
    </div>
  </div>
    )
}
