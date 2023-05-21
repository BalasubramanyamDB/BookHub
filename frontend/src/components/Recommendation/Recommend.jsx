import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import { useState } from 'react'
import axios from 'axios'
import '../Card/Card.css';
import Modal from "../Modal/Modal";
import '../Recommendation/Recommend.css'

const Recommend = () => {
      const[radioInput,setRadio] = useState('best books')
      const [bookData,setData]=useState([]);

      const handleChange = (e) =>{
        setRadio(e.target.value)
      }
      console.log(radioInput)

      useEffect(()=>{
        searchBook(radioInput)
      },[radioInput])
      const searchBook=(book)=>{
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+book+'&key=AIzaSyAz2OF9CJyNsnyWBn8OR8ludDeYnP93vMM'+'&maxResults=40').then(console.log('fetched'))
        .then(res=>setData(res.data.items))
        .catch(err=>console.log(err))
  }
      
  const [show,setShow]=useState(false);
  const [bookItem,setItem]=useState();



  return (
    <div>
        <Navbar></Navbar>
        <div className="choices">
        <label>
          <h1>Genre</h1>
          <input type="radio" value=" best Fiction" checked={radioInput === 'Fiction'} onChange={handleChange}/>
          Fiction
        </label>
        <label>
          <input type="radio" value="psycology" checked={radioInput === 'psycology'} onChange={handleChange}/>
          Psycology
        </label>
        <label>
          <input type="radio" value="Thiller" checked={radioInput === 'Thiller'} onChange={handleChange}/>
          Thiller
        </label>
        <label>
          <input type="radio" value="Sci-fi" checked={radioInput === 'Sci-Fi'} onChange={handleChange}/>
          Sci-Fi
        </label>
        <label>
          <input type="radio" value="Novel" checked={radioInput === 'Novel'} onChange={handleChange}/>
          Novel
        </label>
        <label>
          <input type="radio" value="classics" checked={radioInput === 'classics'} onChange={handleChange}/>
          Classics
        </label>
        <h1>Age group</h1>
        <label>
          <input type="radio" value="toodler" checked={radioInput === 'toodler'} onChange={handleChange}/>
          Toodler
        </label> 
        <label>
          <input type="radio" value="kids" checked={radioInput === 'kids'} onChange={handleChange}/>
          Kids Books
        </label> 
        <label>
          <input type="radio" value="Teen" checked={radioInput === 'Teen'} onChange={handleChange}/>
          Teens
        </label>
        <label>
          <input type="radio" value="history" checked={radioInput === 'history'} onChange={handleChange}/>
          Adult
        </label>          
        </div>

        <div className="book-container">
            {
            

                bookData.map((item) => {
                    <>key={item.id}</>
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if(thumbnail!== undefined && amount !==undefined)
                    {
                        return (
                            <div className ="container">
                            <div className="card" onClick={()=>{setShow(true);setItem(item)}}>
                                <img src = {thumbnail} alt="" />
                                <div className="bottom">
                                    <div className ="title" ><h3 >{item.volumeInfo.title}</h3></div>
                                    <a href={item.volumeInfo.previewLink}><button>Read now</button></a>
                                    
                                </div>
                            </div>
                              <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
                            </div>
                        )
                    }        
                })
            }</div>
    </div>
  )
}

export default Recommend