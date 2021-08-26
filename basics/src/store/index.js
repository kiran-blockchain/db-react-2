import {combineReducers} from 'redux'
import { Auth } from "./auth"
import {CartFeatures} from './products'

const rootReducer= combineReducers({
    Auth,
    CartFeatures
});
export default rootReducer;