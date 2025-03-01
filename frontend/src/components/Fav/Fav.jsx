import React from 'react'
import { useState,useEffect } from "react";
import Modal from "../Modal/Modal";
import '../Card/Card.css';
import axios from "axios";
import Navhome from "../Navhome/Navhome";

 const Fav =  () => {
    let books = []
    const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
    const [bookData,setData]=useState([]);
    useEffect(()=>{
        fetchData()
        console.log(bookData)
          },[])
    const fetchData = async()=>{
        try{
            const user1 = JSON.parse(localStorage.getItem("user")).email;
            console.log(user1);

            const favBooks = await axios.post('http://localhost:5000/getfav',{
            email : user1,
        })
    
        await favBooks.data.lis.forEach(book => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+book+'&key=env.key'+'&maxResults=40').then(console.log('fetched'))
        .then(res=>
        (setData([...bookData,res.data.items[0]]))
        )

    .catch(err=>console.log(err))
    
});
}
catch (error) {
    console.log(error);
}
}
  return (
    <>
        <Navhome></Navhome>
        <div className="book-container">
            {
                bookData && bookData.map((item) => {

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
            

        </>
  )
}
export default Fav
