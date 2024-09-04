import axios from "axios"

export const FETCH_CART_REQUEST = "FETCH_CART_REQUEST"
export const FETCH_CART_SUCCESS = "FETCH_CART_REQSUCCESS"
export const FETCH_CART_FAILURE = "FETCH_CART_FAILURE"

export const ADD_CART_ITEM = 'ADD_CART_ITEM'
export const UPDATE_QUANTITY_ITEM = 'UPDATE_QUANTITY_ITEM'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
export const TOTAL_CART_AMOUNT = 'TOTAL_CART_AMOUNT'

const url = 'http://localhost:4000'
export const addCartItem = (food) => async(dispatch)=>{
    try {
        const res = await axios.post(`${url}/api/cart/add`,food)
            dispatch({
                type:ADD_CART_ITEM,
                payload:res.data.cartData
            })
    } catch (error) {
        console.log(error);
    }
}

export const removeCartItem = (foodId) => async(dispatch) =>{
        try {
            const res = await axios.post(`${url}/api/cart/remove`,foodId);
            dispatch({
                type:REMOVE_CART_ITEM,
                payload:res.data
            })
        } catch (error) {
            console.log(error);
            
        }
}

export const updateQuantityItem = ( quantity, productId) =>({
    type:UPDATE_QUANTITY_ITEM,
    payload:{quantity, productId}
})

export const totalCartAmount = () =>({
    type:TOTAL_CART_AMOUNT
})



export const fetchCartRequest = () =>({
    type:FETCH_CART_REQUEST   
})

export const fetchCartSuccess = (cart) => ({
    type:FETCH_CART_SUCCESS,
    payload:cart
})

export const fetchCartFailure = (error) =>({
    type:FETCH_CART_FAILURE,
    payload:error
})




export const fetchCart = () =>{
    return(dispatch) =>{
        dispatch(fetchCartRequest());
        axios.get(`${url}/api/cart/list`)
        .then((res)=>{
            console.log(res.data);
            dispatch(fetchCartSuccess(res.data.data));
        })
        .catch((err)=>dispatch(fetchCartFailure(err.message)))
    }
} 