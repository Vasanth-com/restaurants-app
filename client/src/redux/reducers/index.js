import { combineReducers } from "redux";
import cartReducer from "./cartReducers";
import foodReducer from "./foodReducers";

const rootReducer = combineReducers ({
    cartItems:cartReducer,
    foodItems:foodReducer
})

export default rootReducer