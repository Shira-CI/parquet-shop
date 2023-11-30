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

    useEffect(() => {
        if (itemId.length > 1) {
            loadItem()
        }
    }, [itemId])


    async function loadItem() {
        try {
            const item = await itemService.getById(itemId)
            setItem(item)
            return item
        }
        catch (err) {
            console.log('Had issues in item details', err)
            // showErrorMsg('Cannot load item')
            navigate('/item')
        }
    }

    if (!item) return <span >loading</span>
    return (
        <div className="item-details-container">

            <section className="item-img">
                <img src={parquetImg} alt="" />
            </section>

            <section className="item-details">
                <div className="item-title"> {item.title} </div>
                <div className="item-description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi libero delectus deleniti distinctio illo.
                </div>
                <div className="item-price-container">
                {item.description}
                    <p className="item-price">  <span> ₪ {item.price} </span>  </p>
                    <span>
                        למ"ר
                    </span>
                   
                </div>

                <div className='order-options'>
                    <section>:כמות במ"ר</section>
                    <section>:מספר חבילות</section>
                    <button className=''>
                        <span> הוסף לסל
                            </span></button>
                    <section className='delivery-options'>אפשרויות משלוחים-</section>
                </div>

                <div className='item-full-info'>
                    <section>תיאור פריט-</section>
                    <section>מפרט טכני-</section>
                    <section> אספקה -</section>
                </div>
            </section>


        </div>
    )
}

export default ItemDetails