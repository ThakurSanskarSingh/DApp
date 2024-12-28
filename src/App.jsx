import React, { FC, useMemo } from 'react';
import { Airdrop } from './Airdrop';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
    WalletConnectButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';

import './App.css'
import { Balance } from './Balance';
import { SendTransaction } from './SendTransaction';
import { SignMessage } from './SignMessage';

function App() {
   const endpoint = 'https://api.devnet.solana.com'
 

  return (
    <>
     <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={[]} autoConnect>
            <WalletModalProvider>
      <div className="min-h-screen bg-gray-900 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-end gap-2 mb-6">
            <WalletMultiButton />
            <WalletDisconnectButton />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Airdrop />
            <Balance />
            <SendTransaction />
            <SignMessage />
          </div>
        </div>
      </div>
    </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>

     </>
  )
}

export default App
