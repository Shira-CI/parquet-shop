import { combineReducers, legacy_createStore as createStore } from 'redux'

import { productReducer } from './product.reducer'
import { userReducer } from './user.reducer'
import { cartReducer } from './cart.reducer'


const rootReducer = combineReducers({
    productModule: productReducer,
    // userModule: userReducer,
    // cartModule: cartReducer
})

export const store = createStore(rootReducer)



// For debug
store.subscribe(() => {
    // console.log('Current state is:', store.getState())
})