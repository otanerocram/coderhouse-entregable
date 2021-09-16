/* Entregable 03 */
import React from 'react'

function ItemListContainter(props) {

    const itemCount = props.count > 0  ? (<span class="badge bg-primary cart-item-count">{props.count}</span>) : "";

    return (
        itemCount
    )
}

export default ItemListContainter
