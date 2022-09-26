import React from 'react';
import GoodsItem from "./GoodsItem";

const GoodsList = ({goods,addOrder}) => {
    if (!goods.length) {
        return <div>found nothing</div>
    }
    return (
        <div className="goods">
            {goods.map(item => <GoodsItem key={item.mainId} item={item} addOrder={addOrder}/>)}
        </div>
    );
};

export default GoodsList;
