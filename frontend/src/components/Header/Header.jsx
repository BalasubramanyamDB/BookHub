import React from 'react';
import './Header.css';
import {FaSearch} from "react-icons/fa";
import {useState} from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  const [search,setSearch]=useState("");
  
  return (
  <>
  <div className="header">
      <div className='desc'>
        <h1 className='desc-content'>Find Your Book Of Choice.</h1>
        <p className='desc-para'>"The more that you read,
         the more things you will know.
         The more that you learn, the more places you'll go."!
         </p>
      </div>
      <div className='desc-search'>
      <input type="text" placeholder="The Lost World ..."
        value={search} onChange={e=>setSearch(e.target.value)}/>
          <Link to={`card/${search}` }className='text-purple' ><FaSearch  size = {32} /></Link>
      </div>
    </div>
  </>
    
  )
}

export default Header