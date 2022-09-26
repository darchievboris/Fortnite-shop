import React from 'react';
import BasketItem from "./BasketItem";

const BasketList = ({
                        order = [],
                        handleBasketShow = Function.prototype,
                        removeFromBasket = Function.prototype,
                        incQuantity=Function.prototype,
                        decQuantity=Function.prototype
                    }) => {
    let totalPrice = order.reduce((sum, el) => sum + el.priceItem * el.quantity, 0)

    return (<ul className="collection basket-list">
        <li className="collection-item active">Корзина
            <span className="secondary-content" onClick={handleBasketShow}
                  style={{cursor: "pointer"}}>
            <i className="material-icons">close</i>

        </span>
        </li>
        {order.length ? (order.map((item) => <BasketItem key={item.id} {...item}
                                                         removeFromBasket={removeFromBasket}
                                                         incQuantity={incQuantity}
                                                         decQuantity={decQuantity}/>)) : (
            <li className='collection-item'>Корзина пуста</li>)}
        <li className="collection-item active">Общая стоимость: {totalPrice} руб</li>
    </ul>)
};

export default BasketList;