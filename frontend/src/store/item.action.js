import { itemService } from "../services/item.service.js"
import { store } from './store.js'
import { ADD_ITEM, REMOVE_ITEM, SET_ITEMS, SET_IS_LOADING, UPDATE_ITEM } from './item.reducer.js'

export async function loadItems(filterBy, sortBy) {
    const sortAndFilter = {filterBy , sortBy}
    // console.log(sortAndFilter)
    store.dispatch({ type: SET_IS_LOADING, isLoading: true })
    try {
        const items = await itemService.query(sortAndFilter)
        // console.log(items)
        store.dispatch({ type: SET_ITEMS, items })
        return items
    }
    catch (err) {
        console.log('item action -> Cannot load items', err)
        throw err
    }
    finally {
        store.dispatch({ type: SET_IS_LOADING, isLoading: false })
    }
}

export async function removeItem(itemId) {
//     try {
//         const removedItem = await itemService.remove(itemId)
//         store.dispatch({ type: REMOVE_ITEM, itemId })
//         return removedItem
//     }
//     catch (err) {
//         console.log('item action -> Cannot remove item', err)
//         throw err
//     }
}

export async function saveItem(item) {
//     const type = item._id ? UPDATE_ITEM : ADD_ITEM
//     try {
//         const savedItem = await itemService.save(item)
//         store.dispatch({ type, item: savedItem })
//         return savedItem
//     }
//     catch (err) {
//         console.log('item action -> Cannot save item', err)
//         throw err
    }
// }
