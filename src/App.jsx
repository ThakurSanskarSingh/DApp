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
                  <div  style={{width : '100vw', display : 'flex' , justifyContent : 'center'}}>

                 <WalletMultiButton />
                 <WalletDisconnectButton />                 
                  <Airdrop></Airdrop>
                  <Balance />
                  <SendTransaction /> 
                  <SignMessage />
                  </div>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>

     </>
  )
}

export default App
