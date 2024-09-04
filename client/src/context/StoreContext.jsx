import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) =>{
    const [cartItems,setCartItems] = useState({});
    const [currentUser,setCurrentUser] = useState(JSON.parse(localStorage.getItem('token-auth')))
    console.log(currentUser);
    
    const url = "http://localhost:4000"
    const [token,setToken] = useState('')



    useEffect(()=>{
        localStorage.setItem('token-auth',JSON.stringify(currentUser))
    },[currentUser])

    const addToCart = async(itemId) =>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }else {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if(token){
            await axios.post(url + "/api/cart/add",{itemId},{headers:token})
        }
    }

    const removeFromCart = async(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId] -1}))
        if(token){
            await axios.post(url + '/api/cart/remove',{itemId},{headers:token})
        }
    }



    const loadCartData = async(token) =>{
        const res = await axios.post(`${url}/api/cart/get`,{},{headers:{token}})
        setCartItems(res.data.cartItems)
    }

    useEffect(()=>{
        async function loadData(){
            if(localStorage.getItem("token-auth")){
                setToken(localStorage.getItem("token-auth"))
                await loadCartData(localStorage.getItem("token-auth"))
            }
        }    

        loadData();
    },[])

    const contextValue = {
        cartItems,
        setCartItems,
        setCurrentUser,
        currentUser,
        addToCart,
        removeFromCart,
        url,
        token,
        setToken
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider