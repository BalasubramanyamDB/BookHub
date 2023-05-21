import { AuthContext } from "../context/AuthContext";
import {useContext} from 'react';

export const useAuthContext = ()=>{
    const context = useContext(AuthContext)

    if (!context){
        throw Error("authcontext must be in authcontext provider ")
    }
    return context
}