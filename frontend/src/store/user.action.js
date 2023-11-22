// import {
//   SET_USER,
//   SET_WATCHED_USER,
//   SET_USER_SCORE
// } from './user.reducer.js'

// import { CLEAR_CART, SET_CART_IS_SHOWN } from './cart.reducer.js'



// import { userService } from '../services/user.service.js'
// import { store } from './store.js'
// import { showErrorMsg } from '../services/event-bus.service'

// // export async function removeUser(userId) {
// //   try {
// //     await userService.remove(userId)
// //     store.dispatch({ type: 'REMOVE_USER', userId })
// //   } catch (err) {
// //     console.log('UserActions: err in removeUser', err)
// //   }
// // }

// export async function checkout(diff) {
//   try {
//     const user = await userService.updateWallet(diff)
//     const newScore = user.wallet

//     // console.log(newScore , 'newScore')
//     store.dispatch({ type: SET_USER_SCORE, newScore })
//     store.dispatch({ type: CLEAR_CART })
//     return user
//   } catch (err) {
//     console.error('Cannot checkout', err)
//     // console.log('Cannot checkout', err)
//     throw err
//   }

// }

// export async function login(credentials) {
//   try {
//     const user = await userService.login(credentials)
//     store.dispatch({ type: SET_USER, user })
//     return user
//   } catch (err) {
//     console.log('Cannot login', err)
//     throw err
//   }
// }

// export async function logout() {
//   try {
//     const user = await userService.logout()
//     store.dispatch({ type: SET_USER, user: null })
//     store.dispatch({ type: CLEAR_CART })
//     store.dispatch({ type: SET_CART_IS_SHOWN, isCartShown: false })


//     return user
//   } catch (err) {
//     console.log('Cannot logout', err)
//     throw err
//   }
// }

// export async function signup(credentials) {
//   try {
//     const user = await userService.signup(credentials)
//     store.dispatch({ type: SET_USER, user })
//     return user
//   } catch (err) {
//     console.log('Cannot signup', err)
//     throw err
//   }
// }

// export async function updateUser(user) {
//   try {
//     await userService.save(user)
//     store.dispatch({ type: SET_USER, user })
//   } catch (err) {
//     console.log('Cannot save user', err)
//     throw err
//   }
// }



// export async function loadUser(userId) {
//   try {
//     const user = await userService.getById(userId)
//     store.dispatch({ type: SET_WATCHED_USER, user })
//   } catch (err) {
//     showErrorMsg('Cannot load user')
//     console.log('Cannot load user', err)
//   }
// }
