import { productService } from "../services/product.service.js"
import { store } from './store.js'
import { ADD_PRODUCT, REMOVE_PRODUCT, SET_PRODUCTS, SET_IS_LOADING, UPDATE_PRODUCT } from './product.reducer.js'

export async function loadProducts(filterBy, sortBy) {
    const sortAndFilter = {filterBy , sortBy}
    // console.log(sortAndFilter)
    store.dispatch({ type: SET_IS_LOADING, isLoading: true })
    try {
        const products = await productService.query(sortAndFilter)
        // console.log(products)
        store.dispatch({ type: SET_PRODUCTS, products })
        return products
    }
    catch (err) {
        console.log('product action -> Cannot load products', err)
        throw err
    }
    finally {
        store.dispatch({ type: SET_IS_LOADING, isLoading: false })
    }
}

export async function removeProduct(productId) {
//     try {
//         const removedProduct = await productService.remove(productId)
//         store.dispatch({ type: REMOVE_PRODUCT, productId })
//         return removedProduct
//     }
//     catch (err) {
//         console.log('product action -> Cannot remove product', err)
//         throw err
//     }
}

export async function saveProduct(product) {
//     const type = product._id ? UPDATE_PRODUCT : ADD_PRODUCT
//     try {
//         const savedProduct = await productService.save(product)
//         store.dispatch({ type, product: savedProduct })
//         return savedProduct
//     }
//     catch (err) {
//         console.log('product action -> Cannot save product', err)
//         throw err
    }
// }
