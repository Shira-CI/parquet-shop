import { combineReducers, legacy_createStore as createStore } from 'redux'

import { itemReducer } from './item.reducer'
import { userReducer } from './user.reducer'
import { visibilityReducer } from './visibility.reducer'


const rootReducer = combineReducers({
    itemModule: itemReducer,
    visibilityModule : visibilityReducer,
    // userModule: userReducer,
    // cartModule: cartReducer
})

export const store = createStore(rootReducer)



// For debug
store.subscribe(() => {
    // console.log('Current state is:', store.getState())
})