import { ItemPreview } from "./ItemPreview";


const ItemList = ({ items, onRemoveItem, user, onAddToCart }) => {


// export function ItemList({ items, onRemoveItem, user, onAddToCart }) {
    return <ul className="items-list">
        {items.map(item =>

            <li className="item-preview" key={item._id}>
            
               <ItemPreview item={item} onRemoveItem={onRemoveItem} user={user} onAddToCart={onAddToCart} /> 
             </li>)} 
    </ul>
}

export default ItemList

