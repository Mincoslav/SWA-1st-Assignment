import getCityData from "./cityDataReducer";
import {combineReducers} from 'redux'

export default combineReducers({
    cityData: getCityData,
})