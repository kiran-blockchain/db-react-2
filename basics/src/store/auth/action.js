import { REDUCER_CONSTANTS } from "../constants";

export const login =(user)=>{
    return{
        type: REDUCER_CONSTANTS.LOGIN,
        data:user
    }
};

export const logout =(user)=>{
    return {
        type:REDUCER_CONSTANTS.LOGOUT,
        data:user
    }
}