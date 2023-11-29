import { utilService } from './util.service.js'
import { httpService } from './http.service.js'
import { storageService } from './async-storage.service.js'
// import { userService } from '../services/user.service.js'

const STORAGE_KEY = 'productDB'
const BASE_URL = 'product/'

const labels = ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle',
'Outdoor', 'Battery Powered']


export const productService = {
    query,
    getById,
    // save,
    remove,
    getEmptyProduct,
    getDefaultFilter,
    getEmptyReview,
    addReview,
    removeReview
}

let gProducts
_createProducts()


function query(sortAndFilter={}) {
    // console.log(sortAndFilter)
    return storageService.query(STORAGE_KEY).then(products => products)
    // return httpService.get(BASE_URL, sortAndFilter)
}

function getById(productId) {
    return storageService.get(STORAGE_KEY, productId)
    // return httpService.get(BASE_URL + productId)
}
function remove(productId) {

    return storageService.remove(STORAGE_KEY, productId)
    // return httpService.delete(BASE_URL + productId)
}



// function save(product) {

//     if (product._id) {
//         return httpService.put(BASE_URL+product._id, product)
//       } else {
//         return httpService.post(BASE_URL, product)
//       }
// }

function getEmptyProduct() {
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



async function addReview(productId, review) {
    review.id = utilService.makeId()
    try{
        let currProduct = await getById(productId)
       currProduct.reviews.push(review)
       await save(currProduct)
       return currProduct
    }
    catch (err){
        console.log('Had issues in adding review', err)
        // showErrorMsg('Cannot load product')
    }
}

async function removeReview(productId, reviewId) {
    try{
       const currProduct = await getById(productId)
       const idx = currProduct.reviews.findIndex(review => review.id === reviewId)
       currProduct.reviews.splice(idx, 1)
      await save(currProduct)
      return currProduct
    }
    catch (err){
        console.log('Had issues in product details', err)
    }
}



// Private functions

function _createProducts() {
    gProducts = utilService.loadFromStorage(STORAGE_KEY)
    if (gProducts && gProducts.length > 0) return

    gProducts = [
        _createProduct('aa'),
        _createProduct('bb'),
        _createProduct('cc'),
        _createProduct('dd'),
        _createProduct('ee'),
        _createProduct('ff'),
    ]
    _saveProducts()
}

function _createProduct(title) {
    return {
        _id: utilService.makeId(),
        title,
        price: utilService.getRandomIntInclusive(50 , 150),
        labels: ['Doll', 'Battery Powered', 'Baby'],
        createdAt: Date.now(),
        inStock: true
    }
}

function _saveProducts() {
    utilService.saveToStorage(STORAGE_KEY, gProducts)
}




