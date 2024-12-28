// import { Ed25519} from "@solana/web3.js";
import { Ed25519Program } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import bs58 from 'bs58'
 export function SignMessage () {
    const {publicKey,signMessage} = useWallet()
    async function onClick(){
        if(!publicKey) throw new Error("walllet not connected")
        if(!signMessage) throw new Error ("Wallet does not support messsage signingig")
            const message = document.getElementById('message').value
        const encodedMessages = new TextEncoder().encode(message)
        const signature = await signMessage(encodedMessages)

        if(!Ed25519Program.verify(signature,encodedMessages,publicKey.toBytes()))  {
            throw new Error ('Message signature invalid')
        }
    alert(`Success','Message signature : ${bs58.encode(signature)}`)


    }
        
    

    return (
        <>
       <div className="p-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
    <h3 className="text-lg font-semibold mb-3 text-gray-200">Sign Message</h3>
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Message"
        id="message"
        className="flex-1 p-2 bg-gray-700 text-gray-200 border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-400"
      />
      <button
        onClick={onClick}
        className="bg-cyan-600 text-gray-200 px-4 py-2 rounded hover:bg-cyan-700 transition-colors"
      >
        Sign Message
      </button>
    </div>
  </div>
        </>
    )
 }