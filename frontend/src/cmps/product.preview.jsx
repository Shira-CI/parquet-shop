import { Link } from "react-router-dom"
import { useState } from 'react'
import { parquetImg } from "../assets"


export function ProductPreview({ product, onRemoveProduct, user, onAddToCart }) {

    return (
        // <div className="product-preview">
            <Link className="details-link" to={`/product/${product._id}`}>

                <div className="preview-img-container">
                    {/* <img src={product.image} alt="" /> */}
                    <img src={parquetImg} alt="" />

                </div>

                <h4>{product.title}</h4>

                <p>מחיר: <span> {product.price} </span> למ"ר</p>
                {/* {!product.inStock && <div className="product-unavailable">
                    <span >Out of stock</span>
                </div>
                } */}
            </Link>


        // </div>
    )
}

