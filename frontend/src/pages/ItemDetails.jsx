import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { itemService } from '../services/item.service'

import { parquetImg } from "../assets"




const ItemDetails = () => {
    const [item, setItem] = useState('')

    const { itemId } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()



    return (
        <div className="item-details-container">

            <section className="item-img">
                <img src={parquetImg} alt="" />
            </section>
            <section className="item-details">
                <div className="item-title"> </div>
                <div className="item-description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi libero delectus deleniti distinctio illo. Nobis, vitae officia! Ipsa, ipsam repudiandae molestias iusto enim aut tempore praesentium aspernatur nobis? Quas, id.
                </div>
            </section>


        </div>
    )
}

export default ItemDetails