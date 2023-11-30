import { utilService } from './util.service.js'
import { httpService } from './http.service.js'
import { storageService } from './async-storage.service.js'
// import { userService } from '../services/user.service.js'

const STORAGE_KEY = 'itemDB'
const BASE_URL = 'item/'

const labels = ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle',
'Outdoor', 'Battery Powered']


export const itemService = {
    query,
    getById,
    // save,
    remove,
    getEmptyItem,
    getDefaultFilter,
    getEmptyReview,
    addReview,
    removeReview
}

let gItems
_createItems()


function query(sortAndFilter={}) {
    // console.log(sortAndFilter)
    return storageService.query(STORAGE_KEY).then(items => items)
    // return httpService.get(BASE_URL, sortAndFilter)
}

function getById(itemId) {
    return storageService.get(STORAGE_KEY, itemId)
    // return httpService.get(BASE_URL + itemId)
}
function remove(itemId) {

    return storageService.remove(STORAGE_KEY, itemId)
    // return httpService.delete(BASE_URL + itemId)
}



// function save(item) {

//     if (item._id) {
//         return httpService.put(BASE_URL+item._id, item)
//       } else {
//         return httpService.post(BASE_URL, item)
//       }
// }

function getEmptyItem() {
    return {
        title:'',
        price: '',
        labels: [],
        createdAt: Date.now(),
        inStock: true,
        msg: [],
        reviews: []
        // image: 
    }
}

function getDefaultFilter() {
    return { title: '', maxPrice: '', inStock: '', labels: '' }
}

function getEmptyReview() {
    return {
        id: '',
        fullname: '',
        rating: 5,
        readAt: '',
        description: ''
    }
}



async function addReview(itemId, review) {
    review.id = utilService.makeId()
    try{
        let currItem = await getById(itemId)
       currItem.reviews.push(review)
       await save(currItem)
       return currItem
    }
    catch (err){
        console.log('Had issues in adding review', err)
        // showErrorMsg('Cannot load item')
    }
}

async function removeReview(itemId, reviewId) {
    try{
       const currItem = await getById(itemId)
       const idx = currItem.reviews.findIndex(review => review.id === reviewId)
       currItem.reviews.splice(idx, 1)
      await save(currItem)
      return currItem
    }
    catch (err){
        console.log('Had issues in item details', err)
    }
}



// Private functions

function _createItems() {
    gItems = utilService.loadFromStorage(STORAGE_KEY)
    if (gItems && gItems.length > 0) return

    gItems = [
        _createItem('aa'),
        _createItem('bb'),
        _createItem('cc'),
        _createItem('dd'),
        _createItem('ee'),
        _createItem('ff'),
    ]
    _saveItems()
}

function _createItem(title) {
    return {
        _id: utilService.makeId(),
        title,
        price: utilService.getRandomIntInclusive(50 , 150),
        labels: ['Doll', 'Battery Powered', 'Baby'],
        createdAt: Date.now(),
        inStock: true
    }
}

function _saveItems() {
    utilService.saveToStorage(STORAGE_KEY, gItems)
}




