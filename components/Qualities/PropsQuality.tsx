
"use client";

import React from "react";

interface CardSkillProps{
    image: string;
    lebel: string;
    paragraphe: string;
}


const PropsQuality:React.FC<CardSkillProps> = ({
    image,
    lebel,
    paragraphe
}) => {
    return(
        <div className="flex flex-col p-5 ml-20   transition ease-out duration-300 ">
            <img className=" cursor-pointer h-32 w-44 md:w-48 sm:w-48 lg:w-48    rounded-xl" src={image} alt="" />
            <div>
                <h1 className="text-lg font-semibold  mt-3">{lebel}</h1>
            </div>
            <div>
                <p className="text-sm w-48 text-gray-500">{paragraphe}</p>
            </div>
        </div>
    )
}

export default PropsQuality;
