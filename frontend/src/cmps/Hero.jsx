import { useEffect, useRef, forwardRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { hero3 } from "../assets"
import { fadeIn } from '../utils/motion'
import { store } from '../store/store'
import { SET_HERO_HEIGHT } from '../store/visibility.reducer'

const Hero = forwardRef(({ isVisible }, ref) => {
    const heroRef = useRef('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (!heroRef.current.offsetHeight) return
        const height = heroRef.current.offsetHeight
        // console.log(height)
        store.dispatch({ type: SET_HERO_HEIGHT, height: height })
    }, [heroRef.current.offsetHeight])

    function onCatalogBtn() {
        navigate(`/catalog`)
    }

    return (

        <div ref={ref} className="hero-container">
            <div ref={heroRef} className="hero-bcg">
                <div></div>
                <img src={hero3} alt="hero" />
            </div>

            {isVisible &&
                <motion.div
                    variants={fadeIn('up', '', 0.1, 1.2, 'hero')}
                    initial='hidden'
                    animate="show"
                    className="hero-txt">
                    <div>
                        MIA
                    </div>
                    <div>
                        GROUP
                    </div>
                    <div>
                        יזמות ובנייה
                    </div>
                    <button onClick={() => { onCatalogBtn() }}>
                        <span>
                            לקטלוג פרקטים
                        </span>
                    </button>

                </motion.div>
            }
        </div>


    )
})

export default Hero
