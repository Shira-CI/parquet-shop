import { Link } from "react-router-dom"
import { useState } from 'react'
import { parquetImg } from "../assets"


export function ItemPreview({ item, onRemoveItem, user, onAddToCart }) {

    return (
        <>
            <Link className="details-link" to={`/item/${item._id}`}>

                <div className="preview-img-container">
                    {/* <img src={item.image} alt="" /> */}
                    <img src={parquetImg} alt="" />

                </div>

                <h2 className="item-preview-title">{item.title}</h2>
            </Link>

            <div className="item-price-container">
                <p className="item-preview-price">  <span> ₪{item.price} </span>
                </p>
                <div>
                למ"ר
            </div>
            </div>
           

            {/* {!item.inStock && <div className="item-unavailable">
                    <span >Out of stock</span>
                </div>
                } */}


        </>

    )
}

