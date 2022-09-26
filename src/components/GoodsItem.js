import React from 'react';

const GoodsItem = (props) => {
    const {mainId: id, displayAssets, displayName: name, displayDescription: description, price} = props.item
    const {full_background} = displayAssets[0]
    const {finalPrice: priceItem} = price
    const {addOrder} = props
    const add = ()=>{
        const item = {
            id,
            name,
            description,
            full_background,
            priceItem
        }
        addOrder(item)
    }
    return (

        <div className="card" id={id}>
            <div className="card-image">
                <img src={full_background} alt={name}/>
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button className="btn" onClick={add}>Купить</button>
                <span className="right" style={{fontSize: '1.8rem'}}>{priceItem} руб.</span>
            </div>
        </div>
    );
};

export default GoodsItem;