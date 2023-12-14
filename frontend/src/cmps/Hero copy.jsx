import { hero } from "../assets"
import { hero2 } from "../assets"
import { hero3 } from "../assets"

import React, { useState, useEffect } from 'react';


const Hero = () => {

    // console.log(isVisible)
    return (

        <div className="hero-container">
            <div className="hero-bcg">
                <div></div>
                <img src={hero3} alt="hero" />
            </div>
            <div className='hero-txt'>
                <div>
                    MIA
                </div>
                <div>
                    GROUP
                </div>
                <div>
                    יזמות ובנייה
                </div>
                <button> לקטלוג פרקטים </button>

            </div>
        </div>

    )
}

export default Hero












