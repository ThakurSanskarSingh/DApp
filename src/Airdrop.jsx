import { useConnection, useWallet } from '@solana/wallet-adapter-react'
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
                amount * 1_000_000_000 
            );

           
            
            alert(`Airdropped ${amount} SOL to ${wallet.publicKey.toBase58()}`);
        } catch (error) {
            console.error("Airdrop failed", error);
            alert("Airdrop failed");
        }
    }

    return (
        <div>
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
            />
            <button onClick={sendAirdropToUser}>Send Airdrop</button>
        </div>
    )
}
