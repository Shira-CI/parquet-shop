export const SET_PRODUCTS = 'SET_PRODUCTS'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

export const SET_IS_LOADING = 'SET_IS_LOADING'


const initialState = {
    products: [],
    isLoading: false,
}

export function productReducer(state = initialState, action) {
    // console.log('action', action)
    let products

    switch (action.type) {
        case SET_IS_LOADING:
            return { ...state, isLoading: action.isLoading }        
        case SET_PRODUCTS:
            return { ...state, products: action.products }
        case REMOVE_PRODUCT:
            products = state.products.filter(product => product._id !== action.productId)
            return { ...state, products }
        case ADD_PRODUCT:
            products = [...state.products, action.product]
            return { ...state, products }
        case UPDATE_PRODUCT:
            products = state.products.map(product => product._id === action.product._id ? action.product : product)
            return { ...state, products }
            
        default:
            return state
    }
}