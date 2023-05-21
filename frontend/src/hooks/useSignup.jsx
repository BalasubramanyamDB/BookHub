import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuthContext } from "./useAuthContext";

export const useSignup = ()=>{
    const[error,setError] = useState(null)
    const navi = useNavigate()
    const[isLoading,setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()
    const signup = async (fname,email, password)=>{
        setIsLoading(true)
        setError(null)

        const response = await fetch('http://localhost:5000/signup',{
            method :'POST',
            headers :{'Content-Type':'application/json'},
            body:JSON.stringify({fname,email, password})
        })
        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))
            console.log('user saved to local storage')
            navi('/')

            //update the auth context
            dispatch({type: 'LOGIN',payload: json})

            setIsLoading(false)
        }
    }
    return {signup,isLoading,error}
} 