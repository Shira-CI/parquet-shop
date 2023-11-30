import { parquetHero } from "../assets/index.js"

// import ItemFilter from '../cmps/ItemFilter.jsx'
// import ItemSort from '../cmps/ItemSort.jsx'
import ItemList from '../cmps/ItemList.jsx'

import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { itemService } from "../services/item.service.js"
import { loadItems, removeItem } from "../store/item.action.js"

// import { ADD_ITEM_TO_CART, SET_CART_IS_SHOWN } from '../store/cart.reducer'


const ItemIndex = () => {

    const [filterBy, setFilterBy] = useState(itemService.getDefaultFilter())
    const [sortBy, setSortBy] = useState({ type: 'headline', desc: 1 })
    const [loggedInUser, setLoggedInUser] = useState(null)

    // const user = useSelector((storeState) => storeState.userModule.user)
    const items = useSelector((storeState) => storeState.itemModule.items)
    // const isLoading = useSelector((storeState) => storeState.itemModule.isLoading)

    // const dispatch = useDispatch()
    // console.log(items)
    // console.log(user , 'user from store')
    // console.log(loggedInUser , 'user from index')


    // useEffect(() => {
        // loadItems(filterBy, sortBy)
        // setLoggedInUser(user)
    // }, [filterBy, sortBy, user])
    useEffect(() => {
        loadItems(filterBy, sortBy)
    }, [filterBy, sortBy])


    function onSetFilter(filterBy) {
        // console.log('FilterBy', filterBy)
        setFilterBy(filterBy)
    }

    async function onRemoveItem(itemId) {
        try {
            await removeItem(itemId)
            showSuccessMsg('Item removed')
        }
        catch (err) {
            showErrorMsg('Cannot remove item')
        }
    }

    function onAddToCart(item) {
        console.log('added to cart')
        // dispatch({ type: ADD_ITEM_TO_CART, item })
        // dispatch({ type: SET_CART_IS_SHOWN, isCartShown: true })
    }


    return (
        <div className="items-index">
            <div className="items-hero">
                <div className="items-hero-img">
                    <img src={parquetHero} alt="" />
                </div>
                <span >
                    פרקטים
                </span>

            </div>



                <section className='items-filter-container'>
                    {/* <ItemFilter onSetFilter={onSetFilter} /> */}

                    {/* <ItemSort sortBy={sortBy} setSortBy={setSortBy} /> */}

                    {/* <Link to={`/item/edit`}>
        <button className='add-item-btn'> Add Item </button>
    </Link> */}

                </section>

                {/* {isLoading && <div className="loader"></div>} */}

                <ItemList
                    // user={loggedInUser}
                    items={items}
                    onRemoveItem={onRemoveItem}
                    onAddToCart={onAddToCart}
                />



        </div>
    )
}

export default ItemIndex