import { Link } from "react-router-dom"
import { useState } from 'react'
import { parquetImg } from "../assets"


export function ProductPreview({ product, onRemoveProduct, user, onAddToCart }) {

    return (
        <>
            <Link className="details-link" to={`/product/${product._id}`}>

                <div className="preview-img-container">
                    {/* <img src={product.image} alt="" /> */}
                    <img src={parquetImg} alt="" />

                </div>

                <h2 className="product-preview-title">{product.title}</h2>
            </Link>

            <div className="product-price-container">
                <p className="product-preview-price">  <span> ₪{product.price} </span>
                </p>
                <div>
                למ"ר
            </div>
            </div>
           

            {/* {!product.inStock && <div className="product-unavailable">
                    <span >Out of stock</span>
                </div>
                } */}


        </>

    )
}

