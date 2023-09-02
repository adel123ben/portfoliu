"use client";

import { TypeAnimation } from 'react-type-animation';

const ProfilType = () => {
    return(
        <div className="flex mt-56 flex-col items-center justify-center">
            <img className="h-28 cursor-pointer w-28 rounded-full" src="https://yt3.googleusercontent.com/FjeN785fVWx0Pr6xCbwPhhq8hHj_gocc3FygDXYDEQgp2gE_FQzRNsFHFAjQ3oE-VJaeGR1a=s900-c-k-c0x00ffffff-no-rj" alt="" />
            <p className='flex mt-3 text-gray-600 text-sm font-semibold flex-row items-center justify-center'>S   O  F  T  W  A  R <span className='ml-3'>E  N  G  I  N  E  E  R</span></p>
            <p className='mt-3 text-2xl'>Hi, My name is Adel Benmouhoub</p>
            <div className='flex flex-row mt-5'>
               
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'I am a Frontend developeur',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'I am a Web devellopeur.',
        1000,
        'I am a Full stack devellopeur.',
        1000,
        'I am a Back end devellopeur.',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '25px', display: 'inline-block', fontFamily: "cursive" }}
      repeat={Infinity}
    />
            </div>
        </div>
    )
}

export default ProfilType;