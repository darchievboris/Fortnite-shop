import React, { useContext } from "react";
import GoodsItem from "./GoodsItem";
import { ShopContext } from "../context";

const GoodsList = () => {
  const { goods } = useContext(ShopContext);
  if (!goods.length) {
    return <div>found nothing</div>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.mainId} {...item} />
      ))}
    </div>
  );
};

export default GoodsList;
