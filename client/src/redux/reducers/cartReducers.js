import { ADD_CART_ITEM , REMOVE_CART_ITEM , TOTAL_CART_AMOUNT, UPDATE_QUANTITY_ITEM } from "../actions/cartActions";

const initialState = {
    items:[],
    subtotal:0
}

const cartReducer = (state = initialState , action)=>{
    console.log(action);
    switch(action.type){
        case ADD_CART_ITEM: 
            const item = state.items.find((item)=> item.id === action.payload.id)
            if(item){
                return{
                    ...state,
                    items:state.items.map((item)=>
                    item.id === action.payload.id ? {...item, quantity:item.quantity + 1}:item
                    )
                }
            }
            return {
                ...state,
                items:[...state.items,{...action.payload , quantity:1}]
            }
        case REMOVE_CART_ITEM:
            const food = state.items.find((item)=>item.id === action.payload.id)
            if(food.quantity > 1){
                return{
                    ...state,
                    items:state.items.map((item)=>
                    item.id === action.payload.id ? {...item , quantity:item.quantity - 1}:item
                    )
                }
            }
            return {
                ...state,
                items:state.items.filter(item => item.id !== action.payload)
            }
            
        case UPDATE_QUANTITY_ITEM:
            return {
                    ...state,
                    items:state.items.map(item=>item.id === action.payload.itemId ? {...item, quantity:action.payload.quantity}:item)
            }
        case TOTAL_CART_AMOUNT:
            const totalAmount = state.items.reduce((total,item)=>{
                return total + (item.price * item.quantity);
            },0)
            return{
                ...state,
                subtotal:totalAmount
            }
        default:
            return state
    }
    
}

export default cartReducer