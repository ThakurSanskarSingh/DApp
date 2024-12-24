import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from '@solana/web3.js'
import React from 'react'

export const  SendTransaction =  () => {

    const wallet = useWallet()

    const {connection} = useConnection()

    async function SendTokens () {

        let to = document.getElementById('to').value
    let amount= document.getElementById('amount').value

    const transaction = new Transaction()
    transaction.add(SystemProgram.transfer({
        fromPubkey : wallet.publicKey,
        toPubkey : new PublicKey(to),
        lamports : amount * LAMPORTS_PER_SOL
        
    }))
    await wallet.sendTransaction(transaction,connection);
    alert(`Sent ${amount} sol to ${to}`)
    }



    

  return (
    <div>
        <input type="text" id='amount' placeholder='amount' />
        <input type="text" id='to' placeholder='Recipent Publlic key' />
        <button onClick={SendTokens}>Send</button>
    </div>
  )
}