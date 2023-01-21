import React from "react"

const Contact = () => {
    return (
        <div className="max-w-[1240px] m-auto p-4 h-screen">
            <h1 className="text-2xl font-bold text-center p-4">Lets work together</h1>
            <form className="max-w-[600] m-auto">
                <div className="grid grid-cols-2 gap-2">
                    <input className="border shadow-lg p-3" type="text" placeholder="Name" />
                    <input className="border shadow-lg p-3" type="email" placeholder="Mail" />
                </div>
                <input
                    className="border shadow-lg p-3 w-full my-2"
                    type="text"
                    placeholder="Subject"
                />
                <textarea
                    className="border shadow-lg p-3 w-full"
                    cols="30"
                    rows="20"
                    placeholder="Message"
                ></textarea>
                <button className="border shadow-lg p-3 w-full mt-2">This form goes nowhere</button>
            </form>
        </div>
    )
}

export default Contact
