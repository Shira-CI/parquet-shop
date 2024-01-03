import { parquetTypes } from '../constants'

const MainCatalog = () => {

    return (
        <div className="main-catalog">
            <div className="main-catalog-header">
                סוגי פרקטים
            </div>

            <ul className='parquet-types'>
                {parquetTypes.map(type => 
                    <li key={type.id}>
                        {type.title}
                    </li>
                )}
            </ul>


        </div>
    )
}

export default MainCatalog