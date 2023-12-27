import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { parquetTypes } from '../constants'
import { motion } from 'framer-motion'
import { fadeIn, slideIn } from '../utils/motion'
import { InView } from 'react-intersection-observer';


const HomeParquets = forwardRef(({ isVisible }, ref) => {
    return (
        <div ref={ref} className="home-parquets-container">
            {isVisible &&
                <motion.section
                    variants={fadeIn('down', '', 0, 1.5, '')}
                    initial='hidden'
                    animate="show"
                >
                    <div className="company-short">
                        <div className='company-short-icon'>
                            ICON
                        </div>

                        <div className='company-short-txt'>
                            <h2>
                                קצת עלינו
                            </h2>
                            <span>אתה מבוסס על תהליכי יצירת קובצים, שמונפים ומתרגמים. האישורים השונים יושגו באמצעות גישות שונות, החל מתהליכי חתימה עד לוובינרים דיגיטליים. הסטנדרטיזציה הגבוהה שלך תורמת לייצוב התהליכים ומקדמת את יעילות העבודה בצורה משמעותית.
                                הפערים הבטחוניים מסווגים ומנוהלים בצורה מומחית, מאפשרים לך להתמקד במשימות העיקריות שלך.
                            </span>
                        </div>

                    </div>

                    <section className="home-parquets">
                        <ul className="parquet-types">
                            {parquetTypes.map((type, idx) =>
                                <Link to={`/catalog/${type.id}`} key={type.id}>
                                    <li
                                        variants={slideIn('up', '', idx + 0.1, 0.2)}
                                        initial='hidden'
                                        animate="show"
                                    >
                                        <span>
                                            {type.title}

                                        </span>
                                        <div>
                                            <img className='img2' src={type.img} alt="" />
                                        </div>
                                    </li>
                                </Link>
                            )}

                        </ul>
                    </section>
                </motion.section>
            }
        </div>
    )
})

export default HomeParquets