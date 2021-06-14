// función reducer que voy a usar despues en un context para despachar acciones

import { types } from "../types/types";

    // const state = {
    //     name: 'Laura',
    //     logged: true
    // }

export const authReducer = (state ={}, action) => {

    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged:true
            }
        case types.logout:
            return {
                logged:false
            }
    
        default:
            return state;
    }

}