import { parquetTypes } from '../constants'
import { shortAboutImg } from '../assets'

const HomeParquets = () => {

    return (
        <div className="home-parquets-container">

            <section className="company-short">
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

                {/* <div className='company-short-img'>
                    <img src={shortAboutImg} alt="" />

                </div> */}

            </section>

            <section className="home-parquets">
                <ul className="parquet-types">
                    {parquetTypes.map((type) =>
                        <li key={type.id}>
                            <span>
                            {type.title}
                            </span>
                            <div>

                            <img src={type.img} alt="" />
                            </div>
                        </li>
                    )}
                </ul>
            </section>
        </div>
    )
}

export default HomeParquets