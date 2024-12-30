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
    //below thing creates a trancaction
    transaction.add(SystemProgram.transfer({
        fromPubkey : wallet.publicKey,
        toPubkey : new PublicKey(to),
        lamports : amount * LAMPORTS_PER_SOL
        
    }))
    //below line is requesting the transaction
    await wallet.sendTransaction(transaction,connection);
    alert(`Sent ${amount} sol to ${to}`)
    }
   

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
    <h3 className="text-lg font-semibold mb-3 text-gray-200">Send Transaction</h3>
    <div className="flex flex-col gap-3">
      <input
        type="text"
        id="amount"
        placeholder="Amount"
        className="p-2 bg-gray-700 text-gray-200 border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
      />
      <input
        type="text"
        id="to"
        placeholder="Recipient Public Key"
        className="p-2 bg-gray-700 text-gray-200 border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
      />
      <button
        onClick={SendTokens}
        className="bg-blue-600 text-gray-200 px-4 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Send
      </button>
    </div>
  </div>
  )
}
