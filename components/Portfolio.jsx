import React from "react"
import Image from "next/image"

const Portfolio = () => {
    return (
        <div className="max-w-[1240px] mx-auto py-16 text-center">
            <h1 className="font-bold text-2xl p-4">AI Photos</h1>
            <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
                <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
                    <Image
                        src="https://cdn.discordapp.com/attachments/1061382349138444338/1066145792391397527/itsalexey_alxzenin_artificial_intelligence_cyberpunk_background_fc169203-6bc2-4db1-88f2-9a4601dd6ba0.png"
                        alt="/"
                        layout="responsive"
                        width="677"
                        height="451"
                    />
                </div>
                <div className="w-full h-full">
                    <Image
                        src="https://cdn.discordapp.com/attachments/1061382349138444338/1065832026432868432/itsalexey_alxzenin_edgerunner_future_3b0268fc-dd54-4905-8413-7a82b88eb30a.png"
                        alt="/"
                        layout="responsive"
                        width="215"
                        height="217"
                        objectFit="cover"
                    />
                </div>
                <div className="w-full h-full">
                    <Image
                        src="https://cdn.discordapp.com/attachments/1061382349138444338/1065831933206089749/itsalexey_alxzenin_strong_cyber_man_distopian_survivor_with_hug_5e38c3d1-fa1a-42e0-953d-0ce749dc9ad5.png"
                        alt="/"
                        layout="responsive"
                        width="215"
                        height="217"
                        objectFit="cover"
                    />
                </div>
                <div className="w-full h-full">
                    <Image
                        src="https://cdn.discordapp.com/attachments/1061382349138444338/1065831711063167066/itsalexey_alxzenin_cyberpunk_anime_style_choom_ai_massive_ac7d8dd4-e7ac-4e11-8026-a4e5a38b1a5d.png"
                        alt="/"
                        layout="responsive"
                        width="215"
                        height="217"
                        objectFit="cover"
                    />
                </div>
                <div className="w-full h-full">
                    <Image
                        src="https://cdn.discordapp.com/attachments/1061382349138444338/1064913140736852078/itsalexey_alxzenin_genius_scientist_cyberpunk_video_game_icon_12649978-5961-4b3d-8027-cb2bc61b58a1.png"
                        alt="/"
                        layout="responsive"
                        width="215"
                        height="217"
                        objectFit="cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default Portfolio
