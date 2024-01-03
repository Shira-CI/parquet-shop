import { forwardRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { projects } from '../constants'
import { motion } from 'framer-motion'
import { fadeIn, slideIn } from '../utils/motion'
import { arrowRight } from '../assets'
import { Carousel } from './Carousel'

const HomeProjects = forwardRef(({ isVisible, isMobile }, ref) => {

    const navigate = useNavigate()

    function onProject(page) {
        navigate(`/${page}`)
    }

    return (
        <div ref={ref} className="home-projects-container">
            {isVisible &&
                <motion.section
                    variants={fadeIn('down', '', 0, 1.5, '')}
                    initial='hidden'
                    animate="show"
                    className='home-projects'
                >
                    <section className='home-projects-header'>
                        <h2>פרוייקטים </h2>
                    </section>


                    <section className="projects">
                        {isMobile ? (
                            <>
                                <Carousel projects={projects} />

                                <div className='mobile-projects-btn'
                                    onClick={() => onNavLink('project')}

                                >
                                    <span className="material-symbols-outlined">
                                        arrow_forward
                                    </span>
                                    לכל הפרויקטים

                                </div>
                            </>
                        ) : (
                            <ul >
                                {projects.map((project, idx) =>
                                    <li
                                        onClick={() => onProject(project.page)}
                                        variants={slideIn('up', '', idx + 0.1, 0.2)}
                                        key={project.id}
                                        initial='hidden'
                                        animate="show"
                                    >
                                        <span>
                                            <section>
                                                {project.title}
                                            </section>

                                            <section>
                                                <img src={arrowRight} alt="" />
                                                לפרוייקטים
                                            </section>
                                        </span>
                                        <img src={project.img} alt="" />

                                    </li>
                                )}
                            </ul>
                        )
                        }
                    </section>



                </motion.section>
            }
        </div>
    )
})

export default HomeProjects