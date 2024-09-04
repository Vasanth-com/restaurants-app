import { FETCH_FOOD_FAILURE, FETCH_FOOD_REQUEST, FETCH_FOOD_SUCCESS } from "../actions/foodactions";


const initialState = {
    foods:[],
    loading:false,
    error:null
}


const foodReducer = (state = initialState , action) =>{
    console.log("Reducer",action);
    switch(action.type){
        case FETCH_FOOD_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_FOOD_SUCCESS:
            return{
                ...state,
                loading:false,
                foods:action.payload
            }
        case FETCH_FOOD_FAILURE:
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
    
}

export default foodReducer