import { useState, useEffect } from "react"
import "./App.css"

function Post() {
    const [data, setData] = useState([{ key: "data", value: 24 }])

    const queryData = async function () {
        try {
            const obj = {}
            data.forEach((element) => (obj[element.key] = element.value))

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

    const onSubmit = () => {
        alert("Successfully added product!")
    }

    const addField = function () {
        setData((data) => data.push({ key: "", value: "" }))
    }

    useEffect(() => {
        queryData().then((data) => setData(data))
    }, [])

    // we need to show all the data that is present in the IPFS url link
    return (
        <div className="w-screen h-screen grid place-items-center overflow-y-auto text-black">
            <div className="w-[48rem] p-4 flex flex-col justify-start gap-4">
                {data.map(({ key, value }, index) => (
                    <div className="flex flex-row gap-4">
                        <input
                            className="rounded bg-slate-700 text-black flex flex-col gap-2 p-4"
                            // value={key}
                            // onChange={}
                        ></input>
                        <input
                            className="rounded bg-slate-700 text-black flex flex-col gap-2 p-4"
                            // value={key}
                        ></input>
                    </div>
                ))}
            </div>
            <div
                className="w-96 p-4 rounded bg-green-400 text-center font-bold"
                onClick={addField}
            >
                Add another field
            </div>
            <div
                className="w-96 p-4 rounded bg-green-400 text-center font-bold"
                onClick={onSubmit}
            >
                Submit
            </div>
        </div>
    )
}

export default Post
