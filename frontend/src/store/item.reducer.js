export const SET_ITEMS = 'SET_ITEMS'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const ADD_ITEM = 'ADD_ITEM'
export const UPDATE_ITEM = 'UPDATE_ITEM'

export const SET_IS_LOADING = 'SET_IS_LOADING'


const initialState = {
    items: [],
    isLoading: false,
}

export function itemReducer(state = initialState, action) {
    // console.log('action', action)
    let items

    switch (action.type) {
        case SET_IS_LOADING:
            return { ...state, isLoading: action.isLoading }        
        case SET_ITEMS:
            return { ...state, items: action.items }
        case REMOVE_ITEM:
            items = state.items.filter(item => item._id !== action.itemId)
            return { ...state, items }
        case ADD_ITEM:
            items = [...state.items, action.item]
            return { ...state, items }
        case UPDATE_ITEM:
            items = state.items.map(item => item._id === action.item._id ? action.item : item)
            return { ...state, items }
            
        default:
            return state
    }
}