import { useState, useEffect } from "react"
import {ethers} from "ethers"

function App() {

    const queryData = async function () {
        try {
            // get the product ID and entropy from the url
            const url = new URL(window.location)
            const searchParams3 = new URLSearchParams(url.search)
            const productID = searchParams3.get("product")
            const privateKey = searchParams3.get("token")

            const wallet = new ethers.Wallet(privateKey)
            const contractAddress = "CONTRACT_ADDRESS"

            

        } catch (error) {
            console.error(error)
            return {}
        }
    }

    useEffect(() => {
        // queryData().then((data) => setData(data))
    }, [])

    // we need to show all the data that is present in the IPFS url link
    return (
        <div className="w-screen h-screen grid place-items-center overflow-y-auto text-center text-black bg-neutral-100">
            Processing...
        </div>
    )
}

export default App
