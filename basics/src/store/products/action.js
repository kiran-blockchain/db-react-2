import axios from "axios";
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
export const productsApiSuccess = (data) => {
    return {
        type: REDUCER_CONSTANTS.GET_PRODUCTS_SUCCESS,
        data: data.map(x=>{
            return {...x,quantity:0};
        })
    }
};
export const productsApiFailure = () => {
    return {
        type: REDUCER_CONSTANTS.GET_PRODUCTS_FAILURE,
        errorMessage: 'Unable to fetch the products'
    }
};
export const getProducts = () => {
    return async (dispatch) => {
        let url = 'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json';
        try {
            let products = await axios.get(url);
            return dispatch(productsApiSuccess(products.data))
        }
        catch (ex) {
            return dispatch(productsApiFailure())
        }
    }
};