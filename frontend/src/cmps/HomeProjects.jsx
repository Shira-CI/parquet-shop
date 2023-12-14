import { forwardRef } from 'react'
import { parquetTypes } from '../constants'
import { motion } from 'framer-motion'
import { fadeIn, slideIn } from '../utils/motion'

const HomeProjects = forwardRef(({ isVisible }, ref) => {
    return (
        <div ref={ref} className="home-projects-container">
            {isVisible &&
                <motion.section
                    variants={fadeIn('down', '', 0, 1.5, '')}
                    initial='hidden'
                    animate="show"
                >
                    <div> HomeProjects </div>
                </motion.section>
            }
        </div>
    )
})

export default HomeProjects