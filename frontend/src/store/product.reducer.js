export const SET_PRODUCTS = 'SET_PRODUCTS'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

export const SET_IS_LOADING = 'SET_IS_LOADING'


const initialState = {
    toys: [],
    isLoading: false,
}

export function productReducer(state = initialState, action) {
    // console.log('action', action)
    let toys

    switch (action.type) {
        case SET_IS_LOADING:
            return { ...state, isLoading: action.isLoading }        
        case SET_PRODUCTS:
            return { ...state, toys: action.toys }
        case REMOVE_PRODUCT:
            toys = state.toys.filter(product => product._id !== action.toyId)
            return { ...state, toys }
        case ADD_PRODUCT:
            toys = [...state.toys, action.product]
            return { ...state, toys }
        case UPDATE_PRODUCT:
            toys = state.toys.map(product => product._id === action.product._id ? action.product : product)
            return { ...state, toys }
            
        default:
            return state
    }
}