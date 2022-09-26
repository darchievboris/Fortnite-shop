import {useEffect, useState} from "react";
import Preloader from "../UI/Preloader";
import {API_KEY, API_URL} from "../config";
import GoodsList from "../components/GoodsList";
import Cart from "../components/Cart";
import BasketList from "../components/BasketList";
import Alert from "../components/Alert";


function Main() {
    const [goods, setGoods] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [order, setOrder] = useState([]);
    const [isBasketShow, setIsBasketShow] = useState(false)
    const [alertName, setAlertName] = useState('');

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)
        if (itemIndex === -1) {
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (itemIndex === index) {
                    return {...orderItem, quantity: orderItem.quantity + 1}
                }
                return orderItem
            })
            setOrder(newOrder)
        }
        setAlertName(item.name)
    }

    const removeFromBasket = (id) => {
        const newOrder = order.filter(el => el.id !== id)
        setOrder(newOrder)
    }

    const handleBasketShow = () => {
        setIsBasketShow(!isBasketShow)
    }

    const incQuantity = (id) =>{
        const indexOrder = order.findIndex(el => el.id === id)
        const newOrder = order.map((el,index) =>{
            if(index ===indexOrder){
                return {...el, quantity: el.quantity+1}
            }
            return el
        })
        setOrder(newOrder)
    }

    const decQuantity = (id) =>{
        const indexOrder = order.findIndex(el => el.id === id)
        let newOrder = []
        if(order[indexOrder].quantity === 1){
            newOrder = order.filter(el => el.id !== id)
        }else{
            newOrder = order.map((el,index)=>{
                if(index === indexOrder){
                    return {...el, quantity: el.quantity-1}
                }
                return el
            })
        }
        setOrder(newOrder)
    }
    const closeAlert = ()=>{
        setAlertName('')
    }


    useEffect(() => {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setGoods(data?.shop)
                setIsLoading(true)
            })
    }, [])

    return (
        <main className="container content">
            <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
            {isLoading ? <GoodsList goods={goods} addOrder={addToBasket}/> :
                <Preloader/>}
            {isBasketShow &&
                <BasketList order={order} handleBasketShow={handleBasketShow}
                            removeFromBasket={removeFromBasket}
                            incQuantity={incQuantity}
                            decQuantity={decQuantity}/>}
            {alertName && <Alert name={alertName} closeAlert={closeAlert}></Alert>}
        </main>
    )
}

export default Main;