import { useContext, useEffect } from "react";
import Preloader from "../UI/Preloader";
import { API_KEY, API_URL } from "../config";
import GoodsList from "../components/GoodsList";
import Cart from "../components/Cart";
import BasketList from "../components/BasketList";
import Alert from "../components/Alert";
import { ShopContext } from "../context";

function Main() {
  const { goods, setGoods, loading, order, isBasketShow, alertName } =
    useContext(ShopContext);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data?.shop);
      });
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
}

export default Main;
