import React, { useEffect } from 'react'
import axios from 'axios'
import { useState} from 'react'
import Navhome from '../Navhome/Navhome'
import '../Explore/Expcard.css'
const Expcard = () => {
    let len = 20
    let genres = ['fiction','comedy','romance']
  const [useData,setData]=useState([])
    // let data=[]
  const search = ()=>{
    genres.forEach((genre) => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${genre}&key=AIzaSyAz2OF9CJyNsnyWBn8OR8ludDeYnP93vMM&maxResults=${len}`)
        .then(console.log('fetched'))
        .then(res=> setData(res.data.items))
        .catch(err=>console.log(err))
    })
  } 
  useEffect(()=>{
    search();
    setData([]);
  },[])

  const displayGenre=()=>{
        return (<>{useData && useData.map((item)=>{
            let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail

          return(
            <div className="container">
              <div className="cards">
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <h3 className ="title">{item.volumeInfo.title}</h3>
                  <a href={item.volumeInfo.previewLink} target="_blank"><button>Read now</button></a>
                </div>
              </div>
            </div>
          )
        })}</>)
  }
  return (
    <>
      <Navhome></Navhome>
      {
        genres.map(()=>{
            displayGenre();
        })
      }
    </>
  )
}

export default Expcard;