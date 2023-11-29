import { Link } from "react-router-dom"
import { useState } from 'react'

// import { ConfirmationModal } from './confirmation.modal'

export function ProductPreview({ product, onRemoveProduct, user, onAddToCart }) {
    // console.log(user)
    const [confirmationMsgIsShown, setConfirmationMsgIsShown] = useState(false)

    function onConfirmRemoveProduct() {
        setConfirmationMsgIsShown(true)
        // console.log('remove product from preview')
    }

    function afterRemoveConfirmation(){
        onRemoveProduct(product._id)
    }

    return (
        <div className="product-preview">
            <Link className="details-a-link" to={`/product/${product._id}`}>
                <h4>{product.title}</h4>
                <div className="product-img-container">
                    <img src={product.image} alt="" />

                </div>

                <p>Price: <span>{product.price}$</span></p>
                {!product.inStock && <div className="product-unavailable">
                    <span >Out of stock</span>
                </div>
                }
            </Link>


        </div>
    )
}

