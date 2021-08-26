import { products } from "../../constants/products";
import { REDUCER_CONSTANTS } from "../constants";

//reducer
const initialState = {
    cartItems: products(),
    cartTotal: 0,
    discount: 0
};
export const CartFeatures = (state = initialState, action) => {
    switch (action.type) {
        case REDUCER_CONSTANTS.CART_ADD_ITEM:
                updateCart(action, state);
                return {...state}
        //logic to add item
        case REDUCER_CONSTANTS.CART_REMOVE_ITEM:
            updateCart(action, state)
            return {...state}
        //logic to remove item

        default:
            return { ...state };
    }
}
const updateCart = (action, state) => {
    state.cartItems = state.cartItems.map((item, index) => {
        if (item.id == action.data.id) {
            if (action.type == REDUCER_CONSTANTS.CART_ADD_ITEM) {
                item.quantity = item.quantity + 1;
            } else {
                item.quantity = item.quantity > 1 ? item.quantity - 1 : 0;
            }
        }
        return item;
    });
}
const total = (state) => {
    let cartTotal = 0;
    state.cartItems.forEach((item, index) => {
        cartTotal += item.quantity * item.price;
    });
    return cartTotal;
}

