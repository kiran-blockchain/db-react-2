import { REDUCER_CONSTANTS } from "../constants"

const initialState = {
    profile: {},
    isLoggedIn: false,
    countryList:[]
}
export const Auth = (state = initialState, action) => {
    switch (action.type) {
        case REDUCER_CONSTANTS.GET_COUNTRYLIST_SUCCESS:
            return { ...state, countryList: action.data };
        
        case REDUCER_CONSTANTS.GET_COUNTRYLIST_FAILURE:
            return { ...state, countryList: [], errorMessage: action.errorMessage }

        case REDUCER_CONSTANTS.LOGIN:
            const check = validateLogin(action.data);
            if (check) {
                return { ...state, isLoggedIn: true, profile: action.data }
            }
            else {
                return { ...state, initialState };
            }
        case REDUCER_CONSTANTS.LOGOUT:
            return { ...state, initialState };
        default:
            return { ...state }
    }
}

const validateLogin = (user) => {
    return (user.name == 'kiran' && user.password == '1234');
}