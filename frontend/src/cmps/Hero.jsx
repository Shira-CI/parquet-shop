import { hero } from "../assets" 

const Hero = () => {

    return (
        <div className="hero-container">
            <div className="hero-bcg">
                <img src={hero} alt="hero" />
            </div>
            <div className="hero-txt">
                <div>
                    MIA GROUP
                </div>
                <div>
                    יזמות ובנייה
                </div>

            </div>
        </div>

    )
}

export default Hero