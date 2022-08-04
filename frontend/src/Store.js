import React,{ useReducer,createContext } from "react";

const Store = createContext()

const intialUser = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
}

const userReducer = (state, action)=>{
    switch(action.type){
        case 'USER_LOGIN':
            return {...state, user: action.payload}
        case 'USER_LOGOUT':
            return {...state, user: null}
        default: 
            return state
    }
}


const StoreProvider = (props) => {
    const [userState, userDispatch] = useReducer(userReducer, intialUser)
    const value = {userState, userDispatch} 
  return (
     <Store.Provider value={value}>
        {props.children}
     </Store.Provider>
  )
}

export {Store, StoreProvider}