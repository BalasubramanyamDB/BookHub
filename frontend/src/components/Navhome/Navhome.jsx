import React from 'react';
import {Link} from 'react-router-dom';
import logoImg from "../../images/logo.png";
import {FaSearch} from "react-icons/fa";
import './Navhome.css'
import { useState } from 'react';
import {useLogout} from '../../hooks/useLogout'
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';


const Navhome = () => {
  const {user} = useAuthContext()
  const [search,setSearch]=useState("");
  const {logout} = useLogout()
  const navi = useNavigate()

  const handleClick = ()=>{
    logout()
    navi('/')

  }
  return (
    <div className="navbar">
        <div className="navbar-left">
            <div className='nav-left-comp'>
            <img src={logoImg} alt=""/>
            <Link to="/" className="bookhub"><h1 >BOOKHUB</h1></Link>
        </div>
        </div>
        <div className="nav-center">
        <input className="left-search" type="text" placeholder="The Lost World ..." value= {search} onChange={e=>setSearch(e.target.value)}  />
        <Link to = {`/card/${search}`}><FaSearch className='text-purple' size = {24} onClick=""/></Link>
        </div>
        <div className="navbar-right">
          
            <Link to='/fav' className="bookhub-right"> <p>Favourites</p> </Link>
            <Link to='/recommend' className="bookhub-right"> <p>Recommend</p> </Link>
            {!user && (<div> <Link to='/signup' className="bookhub-right"><p>Signup</p></Link></div>)}
            {user && (<div> <span>{user.email}</span> <button onClick={handleClick}>Log out</button></div>)}
        </div>
    </div>
  )
}

export default Navhome
