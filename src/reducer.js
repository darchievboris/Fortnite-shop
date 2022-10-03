export function reducer(state, { type, payload }) {
  switch (type) {
    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: "",
      };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        order: state.order.filter((el) => el.id !== payload.id),
      };
    case "HANDLE_BASKET_SHOW":
      return {
        ...state,
        isBasketShow: true,
      };
    case "ADD_TO_BASKET": {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.id === payload.id
      );
      let newOrder = null;
      if (itemIndex === -1) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (itemIndex === index) {
            return { ...orderItem, quantity: orderItem.quantity + 1 };
          }
          return orderItem;
        });
      }

      return {
        ...state,
        order: newOrder,
        alertName: payload.name,
      };
    }
    case "INC_QUANTITY": {
      const indexOrder = state.order.findIndex((el) => el.id === payload.id);
      const newOrder = state.order.map((el, index) => {
        if (index === indexOrder) {
          return { ...el, quantity: el.quantity + 1 };
        }
        return el;
      });
      return {
        ...state,
        order: newOrder,
      };
    }

    case "DEC_QUANTITY": {
      const indexOrder = state.order.findIndex((el) => el.id === payload.id);
      let newOrder = [];
      if (state.order[indexOrder].quantity === 1) {
        newOrder = state.order.filter((el) => el.id !== payload.id);
      } else {
        newOrder = state.order.map((el, index) => {
          if (index === indexOrder) {
            return { ...el, quantity: el.quantity - 1 };
          }
          return el;
        });
      }
      return {
        ...state,
        order: newOrder,
      };
    }
    case "TOGGLE_BASKET": {
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };
    }
    case "SET_GOODS":
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };

    default:
      return state;
  }
}
