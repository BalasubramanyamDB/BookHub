import React from 'react';
import {useState} from 'react';
import './Signup.css';
import { useSignup } from '../../hooks/useSignup';
import Navbar from '../Navbar/Navbar';
import { Link} from 'react-router-dom';

const Signup = () => {

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[fname,setFname] = useState('')
    const {signup,error,isLoading} = useSignup()
    const handleSubmit = async(e)=>{
        e.preventDefault()
        await signup(fname,email,password)
    }
  return (
    <>
    <Navbar></Navbar>
    <form className="signup" onSubmit={handleSubmit}>
        <h3>Sign up</h3>
        <label>Name:</label>
        <input
        type = 'text'
        onChange= {(e)=>setFname(e.target.value)}
        value = {fname}
        />
        <label>Email:</label>
        <input
        type = 'email'
        onChange= {(e)=>setEmail(e.target.value)}
        value = {email}
        />
        <label>Password:</label>
        <input
        type = 'password'
        onChange= {(e)=>setPassword(e.target.value)}
        value = {password}
        />
        <button disabled={isLoading}>Sign up</button>
        {error && <div className="error">{error}</div> }
        <Link to="/login" className="btn-login" ><p>Already have an account?</p></Link>
    </form>
    </>
    
  )
}

export default Signup