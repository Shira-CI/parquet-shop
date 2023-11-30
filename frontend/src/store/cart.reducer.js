export const SET_CART_IS_SHOWN = 'SET_CART_IS_SHOWN'
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART'
export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'
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
        case REMOVE_ITEM_FROM_CART:
            shoppingCart = state.shoppingCart.filter(item => item._id !== action.itemId)
            return { ...state, shoppingCart }
        case ADD_ITEM_TO_CART:
            shoppingCart = [...state.shoppingCart, action.item]
            return { ...state, shoppingCart }
        case CLEAR_CART:
            return { ...state, shoppingCart: [] }
        default:
            return state
    }
}