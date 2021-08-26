import { REDUCER_CONSTANTS } from "../constants";

//action
export const addToCart = (item) => {
    return {
        type: REDUCER_CONSTANTS.CART_ADD_ITEM,
        data: item
    }
};

export const removeFromCart = (item) => {
    return {
        type: REDUCER_CONSTANTS.CART_REMOVE_ITEM,
        data: item
    }
};