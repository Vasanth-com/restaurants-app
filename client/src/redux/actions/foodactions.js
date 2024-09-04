import axios from 'axios'

export const FETCH_FOOD_REQUEST = "FETCH_FOOD_REQUEST"
export const FETCH_FOOD_SUCCESS = "FETCH_FOOD_SUCCESS"
export const FETCH_FOOD_FAILURE = "FETCH_FOOD_FAILURE"


export const fetchFoodRequest = () =>({
    type:FETCH_FOOD_REQUEST
})

export const fetchFoodSuccess = (foods) =>({
    type:FETCH_FOOD_SUCCESS,
    payload:foods
})

export const fetchFoodFailure = (error) =>({
    type:FETCH_FOOD_FAILURE,
    payload:error
})

export const fetchFoods = () => {
    return(dispatch)=>{
        dispatch(fetchFoodRequest());
        axios.get('http://localhost:4000/api/foods/list')
        .then((res)=>{
            console.log(res.data);
            dispatch(fetchFoodSuccess(res.data.data))
        })
        .catch((err)=>dispatch(fetchFoodFailure(err.message)))
    }
}