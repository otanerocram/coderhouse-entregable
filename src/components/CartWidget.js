/* Entregable 03 */
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import ItemListContainter from './ItemListContainter';

function CartWidget() {
    return (
        <div className="cart-item-list"> Carrito de Compras &nbsp;<FaShoppingCart />&nbsp; <ItemListContainter count={2} /> </div>
    )
}

export default CartWidget