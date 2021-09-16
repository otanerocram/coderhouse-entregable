/* Entregable 03 */
import React, {useState} from 'react'

function ItemListContainter(props) {

    const [itemCount, setitemCount] = useState(props.count)

    const itemCountTag = itemCount > 0  ? (<span class="badge bg-primary cart-item-count">{props.count}</span>) : "";

    return (
        itemCountTag
    )
}

export default ItemListContainter
