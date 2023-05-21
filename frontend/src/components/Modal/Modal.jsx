import '../Modal/Modal.css';
// import { GrFormClose } from "react-icons/fa";
import axios from "axios";



const Modal=({show,item,onClose})=>{
    if(!show)
    {
        return null;
    }
    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    let rating = (item.volumeInfo.rating ) 
    let id = item.id
    if (rating === undefined){
        rating = 'N/A'// need to change
    }  
    let category = item.volumeInfo.category
    if (category === undefined){
        category = Math.floor(Math.random() * 4)+1;	
    }
    console.log(category)
    console.log(rating)
    const addBook = (title)=>{
        
        const user1 = JSON.parse(localStorage.getItem("user")).email;
        console.log(user1)
        axios.post('http://localhost:5000/addFav',{
            user : user1,
            item : title

        }).then(console.log('fetched'))

    }

    return(
        <>
            <div className="overlay">
                <div className="overlay-inner">
                    <button className="close" onClick={onClose}><p>x</p></button>
                    <div className="inner-box">
                        <img src={thumbnail} alt="" />
                        <div className="info">
                            <h5>{item.volumeInfo.title}</h5>
                            <h5>Author: {item.volumeInfo.authors}</h5>
                            <h5 className="avg-cat"> Rating: {rating}</h5><br/>
                            {/* <h5>{category}</h5> */}
                            <a href={item.volumeInfo.previewLink}><button>Read now</button></a>
                            <button onClick={e =>{addBook(item.id)}}>Save</button>
                        </div>
                    </div>
                    <div className="description">
                        <h4 >{item.volumeInfo.description}</h4>
                    </div>
                </div>
            </div>
        </>
    )
    // <i className='fas fa-times'></i>
}
export default Modal

