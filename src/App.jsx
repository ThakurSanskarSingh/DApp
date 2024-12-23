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

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

import './App.css'

function App() {
   const endpoint = 'https://solana-devnet.g.alchemy.com/v2/jj-nP5131CJpHvj_piXoKPWVHjkOAu99'
 

  return (
    <>
     <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                 <WalletMultiButton></WalletMultiButton>
                  <WalletDisconnectButton> </WalletDisconnectButton>
                  <Airdrop></Airdrop>
                                     
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>

     </>
  )
}

export default App
