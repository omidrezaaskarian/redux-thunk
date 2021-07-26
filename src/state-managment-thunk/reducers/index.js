import {combineReducers} from 'redux'
import productThunkReducer from './productThunkReducer'

export default combineReducers({
    productThunkState:productThunkReducer,
})