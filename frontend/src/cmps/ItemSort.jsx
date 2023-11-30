import { useState, useEffect } from 'react'

const ItemSort = ({ sortBy, setSortBy }) => {



// export function ItemSort({ sortBy, setSortBy }) {

    const [sortByToEdit, setSortByToEdit] = useState({ ...sortBy })

    useEffect(() => {
        setSortBy(sortByToEdit)
    }, [sortByToEdit])

    function handleChange({ target }) {
        const field = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        if (field === 'desc') {
            const newDesc = value ? 1 : -1;
            setSortByToEdit((prevSort) => ({ ...prevSort, desc: newDesc }));
        } else {
            setSortByToEdit((prevSort) => ({ ...prevSort, [field]: value }));
        }
    }
    
    

    return (
        <form className="item-sort">
            <select className="sort-type" name="type" value={sortByToEdit.type} onChange={handleChange}>
                <option value="headline" disabled >Select sorting option</option>
                <option value="title">Name</option>
                <option value="createdAt">Created At</option>
                <option value="price">Price</option>
            </select>
            <label>
                <input type="checkbox" name="desc" checked={sortByToEdit.desc > 0} onChange={handleChange} />
                <span> Ascending</span> 
            </label>
        </form >
    )
}

export default ItemSort