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
        <input type="text" placeholder="message" id="message" />
        <button onClick={onClick}>Sign Message</button>
        </>
    )
 }