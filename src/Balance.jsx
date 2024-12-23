import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

export const Balance = () => {
    const [balance, setBalance] = useState('');
    const { publicKey } = useWallet();  

    const endpoint = 'https://solana-devnet.g.alchemy.com/v2/jj-nP5131CJpHvj_piXoKPWVHjkOAu99';

    const fetchBalance = async () => {
        if (!publicKey) {
            setBalance('Connect Wallet');
            return;
        }

        try {
            const response = await axios.post(endpoint, {
                jsonrpc: '2.0',
                id: 1,
                method: 'getBalance',
                params: [publicKey.toBase58()],
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const balanceInLamports = response.data.result.value;
            const sol = (balanceInLamports / 10 ** 9).toFixed(4) + ' SOL';
            setBalance(sol);
            console.log("Balance fetched successfully");
        } catch (error) {
            console.error(`Failed to fetch Solana balance for ${publicKey.toBase58()}:`, error);
            setBalance('Error fetching balance');
        }
    };

    
    useEffect(() => {
        fetchBalance();
    }, [publicKey]);

    return (
        <div>
            <h3>Balance: {balance}</h3>
            <button onClick={fetchBalance}>Refresh Balance</button>
        </div>
    );
};
