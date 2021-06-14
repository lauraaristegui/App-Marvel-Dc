import React, { useReducer, useEffect } from 'react';
import AppRouter from './routers/AppRouter';
import {AuthContext} from './auth/AuthContext';
import { authReducer } from './auth/authReducer';

//utilizo el init por que voy a leer el localStorage
const init = () => {
    return JSON.parse(localStorage.getItem('user')) || {
        logged:false
    }
}

const HeroesApp = () => {
  
   
   const [user, dispatch] = useReducer(authReducer, {}, init)

   useEffect(() => {
       //cuando recargue la pag no voy a perder la info del user
       localStorage.setItem('user', JSON.stringify(user))
      //solo cambia si el user cambia 
   }, [user])

    return (
        <AuthContext.Provider value={{user, dispatch}}>
             <AppRouter/>
        </AuthContext.Provider>
    )
}

export default HeroesApp
