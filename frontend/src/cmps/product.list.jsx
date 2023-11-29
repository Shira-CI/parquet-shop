import { ProductPreview } from "./product.preview";


const ProductList = ({ products, onRemoveProduct, user, onAddToCart }) => {


// export function ProductList({ products, onRemoveProduct, user, onAddToCart }) {
    return <ul className="products-list">
        {products.map(product =>

            <li className="product-preview" key={product._id}>
            
               <ProductPreview product={product} onRemoveProduct={onRemoveProduct} user={user} onAddToCart={onAddToCart} /> 
             </li>)} 
    </ul>
}

export default ProductList

