import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

export const Balance = () => {
    const [balance, setBalance] = useState('');
   const wallet  = useWallet()
   const {connection} = useConnection()

    // const endpoint = 'https://solana-devnet.g.alchemy.com/v2/jj-nP5131CJpHvj_piXoKPWVHjkOAu99';

    const fetchBalance = async () => {
        
        if (!wallet.publicKey) {
            setBalance('Connect Wallet');
            return;
        }

        try {
            // const response = await axios.post(endpoint, {
            //     jsonrpc: '2.0',
            //     id: 1,
            //     method: 'getBalance',
            //     params: [publicKey.toBase58()],
            // }, {
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            // });
            const balanceInLamports = await connection.getBalance(wallet.publicKey)
            // console.log(balanceInLamports)

           
           const sol = (balanceInLamports / LAMPORTS_PER_SOL).toFixed('4')
        //    console.log(sol)

            setBalance(sol);
            // console.log(balance)
            console.log("Balance fetched successfully");
        } catch (error) {
            console.error(`Failed to fetch Solana balance for ${publicKey.toBase58()}:`, error);
            setBalance('Error fetching balance');
        }
    };
    
    useEffect(() => {
        fetchBalance();
    }, [wallet.publicKey]);

    return (
        <div className="p-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
        <div className="flex items-center justify-between">
          <h5 className="text-lg font-semibold text-gray-200">Balance: {balance}</h5>
          <button
            onClick={fetchBalance}
            className="bg-emerald-600 text-gray-200 px-4 py-2 rounded hover:bg-emerald-700 transition-colors"
          >
            Refresh Balance
          </button>
        </div>
      </div>
    );
};
