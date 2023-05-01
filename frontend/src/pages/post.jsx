import { useState, useEffect } from "react"

function Post() {
    const [inputData, setData] = useState([{ key: "", value: "" }])

    const onSubmit = () => {
        // create wallet
        // send some amount there
        // use the privateKey and the productID to create a link
    }

    const addField = function () {
        setData((data) => [...data, { key: "", value: "" }])
    }

    const onUpdate = (field, index) => (e) => {
        setData((inputData) => {
            const data = [...inputData]
            data[index][field] = e.target.value
            return data
        })
    }

    useEffect(() => {
    }, [])

    // we need to show all the data that is present in the IPFS url link
    return (
        <div className="w-screen h-screen grid place-items-center overflow-y-auto text-black">
            <div className="w-[36rem] p-4 flex flex-col justify-start gap-4 items-center">
                {console.log(inputData)}
                {inputData.map((member, index) => (
                    <div className="flex flex-row gap-4" key={index}>
                        <input
                            className="rounded bg-slate-300 text-black flex flex-col gap-2 p-4 grow"
                            value={member.key}
                            onChange={onUpdate("key", index)}
                        ></input>
                        <input
                            className="rounded bg-slate-300 text-black flex flex-col gap-2 p-4 grow"
                            value={member.value}
                            onChange={onUpdate("value", index)}
                        ></input>
                    </div>
                ))}
                <div
                    className="w-[36rem] p-4 rounded bg-green-400 text-center font-bold"
                    onClick={addField}
                >
                    Add another field
                </div>
                <div
                    className="w-[36rem] p-4 rounded bg-green-400 text-center font-bold"
                    onClick={onSubmit}
                >
                    Submit
                </div>
            </div>
        </div>
    )
}

export default Post
