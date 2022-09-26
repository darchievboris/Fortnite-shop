import React from 'react';

const BasketItem = ({
                        id, name, priceItem, quantity, removeFromBasket, incQuantity,
                        decQuantity
                    }) => {
    return (
        <li className="collection-item ">{name} x <i className="material-icons basket-quantity"
                                                     onClick={() => incQuantity(id)}>add</i> {quantity}  <i
            className="material-icons basket-quantity"
            onClick={() => decQuantity(id)}>remove</i> = {priceItem * quantity}
            <span className="secondary-content">
            <i className="material-icons" style={{cursor: "pointer"}}
               onClick={() => removeFromBasket(id)}
            >close</i>

        </span></li>

    )
};

export default BasketItem;