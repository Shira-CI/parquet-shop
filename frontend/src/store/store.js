import { combineReducers, legacy_createStore as createStore } from 'redux'

import { itemReducer } from './item.reducer'
import { userReducer } from './user.reducer'
import { cartReducer } from './cart.reducer'


const rootReducer = combineReducers({
    itemModule: itemReducer,
    // userModule: userReducer,
    // cartModule: cartReducer
})

export const store = createStore(rootReducer)



// For debug
store.subscribe(() => {
    // console.log('Current state is:', store.getState())
})