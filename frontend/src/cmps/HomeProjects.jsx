import { forwardRef } from 'react'
import { projects } from '../constants'
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
                    <div className='home-projects'>
                        <section className='home-projects-header'>
                            <h2>פרוייקטים שלנו</h2>
                        </section>

                        <section className="projects">
                            <ul className="">
                                {projects.map((project, idx) =>
                                    <li
                                        variants={slideIn('up', '', idx + 0.1, 0.2)}
                                        key={project.id}
                                        initial='hidden'
                                        animate="show"
                                    >
                                        <span>
                                            {project.title}
                                        </span>
                                            <img src={project.img} alt="" />
                                        {/* <div> */}
                                        {/* </div> */}
                                    </li>
                                )}

                            </ul>
                        </section>


                    </div>




                </motion.section>
            }
        </div>
    )
})

export default HomeProjects