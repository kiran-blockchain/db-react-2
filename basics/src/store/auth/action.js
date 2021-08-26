import axios from "axios";
import thunk from "redux-thunk";
import { REDUCER_CONSTANTS } from "../constants";

export const login = (user) => {
    return {
        type: REDUCER_CONSTANTS.LOGIN,
        data: user
    }
};

export const logout = (user) => {
    return {
        type: REDUCER_CONSTANTS.LOGOUT,
        data: user
    }
}
export const getCountryList = () => {
    return async (dispatch) => {
        try {
            let response = await axios.get("https://restcountries.eu/rest/v2/all");
            let countriesList = response.data.map(x => {
                return { name: x.name, value: x.alpha2Code };
            });
            dispatch(getCountryListSuccess(countriesList));
        }
        catch (ex) {
            dispatch(getCountryListFailure());
        }

    }
}

export const getCountryListSuccess = (data) => {
    return {
        type: REDUCER_CONSTANTS.GET_COUNTRYLIST_SUCCESS,
        data: data
    }
};

export const getCountryListFailure = () => {
    return {
        type: REDUCER_CONSTANTS.GET_COUNTRYLIST_FAILURE,
        errorMessage: 'Unable to fetch countries'
    };
};