import { parquetHero } from "../assets/index.js"

// import ProductFilter from '../cmps/ProductFilter.jsx'
// import ProductSort from '../cmps/ProductSort.jsx'
import ProductList from '../cmps/ProductList.jsx'

import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { productService } from "../services/product.service.js"
import { loadProducts, removeProduct } from "../store/product.action.js"

// import { ADD_PRODUCT_TO_CART, SET_CART_IS_SHOWN } from '../store/cart.reducer'


const ProductIndex = () => {

    const [filterBy, setFilterBy] = useState(productService.getDefaultFilter())
    const [sortBy, setSortBy] = useState({ type: 'headline', desc: 1 })
    const [loggedInUser, setLoggedInUser] = useState(null)

    // const user = useSelector((storeState) => storeState.userModule.user)
    const products = useSelector((storeState) => storeState.productModule.products)
    // const isLoading = useSelector((storeState) => storeState.productModule.isLoading)

    // const dispatch = useDispatch()
    // console.log(products)
    // console.log(user , 'user from store')
    // console.log(loggedInUser , 'user from index')


    // useEffect(() => {
        // loadProducts(filterBy, sortBy)
        // setLoggedInUser(user)
    // }, [filterBy, sortBy, user])
    useEffect(() => {
        loadProducts(filterBy, sortBy)
    }, [filterBy, sortBy])


    function onSetFilter(filterBy) {
        // console.log('FilterBy', filterBy)
        setFilterBy(filterBy)
    }

    async function onRemoveProduct(productId) {
        try {
            await removeProduct(productId)
            showSuccessMsg('Product removed')
        }
        catch (err) {
            showErrorMsg('Cannot remove product')
        }
    }

    function onAddToCart(product) {
        console.log('added to cart')
        // dispatch({ type: ADD_PRODUCT_TO_CART, product })
        // dispatch({ type: SET_CART_IS_SHOWN, isCartShown: true })
    }


    return (
        <div className="products-index">
            <div className="products-hero">
                <div className="products-hero-img">
                    <img src={parquetHero} alt="" />
                </div>
                <span >
                    פרקטים
                </span>

            </div>



                <section className='products-filter-container'>
                    {/* <ProductFilter onSetFilter={onSetFilter} /> */}

                    {/* <ProductSort sortBy={sortBy} setSortBy={setSortBy} /> */}

                    {/* <Link to={`/product/edit`}>
        <button className='add-product-btn'> Add Product </button>
    </Link> */}

                </section>

                {/* {isLoading && <div className="loader"></div>} */}

                <ProductList
                    // user={loggedInUser}
                    products={products}
                    onRemoveProduct={onRemoveProduct}
                    onAddToCart={onAddToCart}
                />



        </div>
    )
}

export default ProductIndex