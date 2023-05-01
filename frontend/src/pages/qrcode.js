import QRCode from "qrcode"
import { useEffect } from "react"

export default function App() {
    useEffect(() => {
        // get the display url
        const _url = new URL(window.location)
        const searchParams = new URLSearchParams(_url.search)
        const url = searchParams.get("url")
        const canvas = document.getElementById("qrcode")

        // convert that into a qrcode
        QRCode.toCanvas(canvas, url, function (error) {
            if (error) console.error(error)
        })
    }, [])
    return (
        <div className="h-screen w-screen grid place-items-center">
            <div className="w-96 flex flex-col gap-4 items-center">
                <h1 className="font-bold text-neutral-600 text-xl">Sucessful!</h1>
                <h1 className="text-black">Share this with your customer</h1>
                <canvas id="qrcode" className="w-72 h-72"></canvas>
            </div>
        </div>
    )
}
