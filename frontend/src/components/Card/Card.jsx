import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import '../Card/Card.css';
import { useParams } from "react-router";
import axios from "axios";
import Navhome from "../Navhome/Navhome";

const Card = ({ book }) => {
    // let len = 40
  const {name} = useParams()
  const [bookData,setData]=useState([]);

  useEffect(()=>{
    searchBook(name);
  },[name])

  // // const navigate = useNavigate();
  const searchBook=(book)=>{
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+book+'&key=AIzaSyAz2OF9CJyNsnyWBn8OR8ludDeYnP93vMM'+'&maxResults=40').then(console.log('fetched'))
        .then(res=>setData(res.data.items))
        .catch(err=>console.log(err))
  }
    const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
    console.log(name)
    console.log(book)
    console.log(bookData)

    
    return (
        <>
        <Navhome></Navhome>
        <div className="search-text">
            <h2>Search result  for '{name}'</h2>
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
            

        </>
    )
}
export default Card