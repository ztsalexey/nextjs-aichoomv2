import React from "react"
import one from "../public/1.png"
import two from "../public/2.png"
import three from "../public/3.png"
import four from "../public/4.png"
import five from "../public/5.png"
import six from "../public/6.png"
import InstagramImg from "./InstagramImg"

const Instagram = () => {
    return (
        <div className="max-w-[1240px] mx-auto text-center py-24">
            <p className="text-2xl font-bold">Follow me on Insta</p>
            <p className="pb-4">@aichoom</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
                <InstagramImg socialImg={one} />
                <InstagramImg socialImg={two} />
                <InstagramImg socialImg={three} />
                <InstagramImg socialImg={four} />
                <InstagramImg socialImg={five} />
                <InstagramImg socialImg={six} />
            </div>
        </div>
    )
}

export default Instagram
