import { hero } from "../assets"
import { hero2 } from "../assets"
import { hero3 } from "../assets"
import { motion, AnimatePresence } from 'framer-motion'
import { textVariant, fadeIn } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { forwardRef } from 'react'

const Hero = forwardRef(({ isVisible }, ref) => {

    return (
        // <AnimatePresence>
        <div ref={ref} className="hero-container">
            <div className="hero-bcg">
                <div></div>
                <img src={hero3} alt="hero" />
            </div>
            {isVisible &&
                <motion.div
                    // key="hero-text"
                    variants={fadeIn('up', '', 0.1, 1.2)}
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
                    <button> לקטלוג פרקטים </button>

                </motion.div>
            }
        </div>
        // </AnimatePresence>

    )
})

export default Hero
// export default SectionWrapper(Hero, "hero")