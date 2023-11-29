export const SET_CART_IS_SHOWN = 'SET_CART_IS_SHOWN'
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART'
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
export const CLEAR_CART = 'CLEAR_CART'


const initialState = {
    isCartShown: false,
    shoppingCart: [],
}


export function cartReducer(state = initialState, action) {
    // console.log('action', action)
    let shoppingCart

    switch (action.type) {
        case SET_CART_IS_SHOWN:
            return { ...state, isCartShown: action.isCartShown }
        case REMOVE_PRODUCT_FROM_CART:
            shoppingCart = state.shoppingCart.filter(product => product._id !== action.productId)
            return { ...state, shoppingCart }
        case ADD_PRODUCT_TO_CART:
            shoppingCart = [...state.shoppingCart, action.product]
            return { ...state, shoppingCart }
        case CLEAR_CART:
            return { ...state, shoppingCart: [] }
        default:
            return state
    }
}