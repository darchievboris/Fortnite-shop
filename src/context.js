import {createContext, useReducer} from "react";

export const ShopContext = createContext()
const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: "",
    closeAlert: Function.prototype,
    removeFromBasket: Function.prototype,
    handleBasketShow: Function.prototype,

}
export const ShopContext = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState);
    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'})
    }
    value.removeFromBasket = (itemId) => {
        dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: itemId}})
    }
    value.handleBasketShow=()=>{
        dispatch({type:'HANDLE_BASKET_SHOW'})
    }
    value.addToBasket = (item) =>{
        dispatch({type:'ADD_TO_BASKET', payload: item})
    }
    value.incQuantity= (itemId) => {
        dispatch({type:'INC_QUANTITY', payload: {id:itemId}})
    }
    value.incQuantity= (itemId) => {
        dispatch({type:'DEC_QUANTITY', payload: {id:itemId}})
    }
    value.handleBasketShow = () =>{
        dispatch({type:'TOGGLE_BASKET'})
    }


    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}