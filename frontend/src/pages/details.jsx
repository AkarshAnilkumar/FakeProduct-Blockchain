import { useState, useEffect } from "react"

function App() {
    const [data, setData] = useState({
        "Product ID": "12345",
        "Name": "Reebok Shoes",
    })

    const queryData = async function () {
        try {
            // get the URL parameters
            const url = new URL(window.location)
            const searchParams3 = new URLSearchParams(url.search)
            const CID = searchParams3.get("dataURL")
            console.log(`CID = ${CID}`)

            // query IPFS
            const dataString = await fetch(`https://ipfs.io/ipfs/${CID}`)
            const data = JSON.parse(dataString)

            console.table(data)

            // return the data present in the JSON
            return data
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
        <div className="w-screen h-screen grid place-items-center">
            <div className="w-96 p-4 flex flex-col justify-start gap-4">
                {Object.keys(data).map((key) => (
                    <div className="rounded bg-slate-300 text-black flex flex-col gap-2 p-4">
                        <h1 className="font-bold text-2xl">{key}</h1>
                        <p>{data[key]}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default App