import { useState,useEffect } from 'react';
import HOC from './HOC';
const axios = require('axios');

const Books = () =>{
    useEffect(()=>{
        getBookInfo();
    },[])

    const [listofbook,setbook] = useState([]);
    const [allBooks, setallBooks] = useState([]);
    
    const getBookInfo =()=>{

        axios.get('https://www.googleapis.com/books/v1/volumes?q=search+terms')
        .then(function (response) {
            setbook(response.data.items);
            setallBooks(response.data.items);
        }).catch(function (error) {
            console.log(error);
        });
    }

    const getNewData = (data) =>{
        setbook(data);
        console.log(allBooks);
        
    }
    console.log(allBooks);
    return(
        <div>
            <h1>List of Books</h1>
            <HOC content={allBooks} reverse={getNewData} from="books" />
            <br/>   
        <div className="container book">
        
        {listofbook.map(book =>
            <div>
                <div class="card" style={{'width': '20rem','marginBottom':'2rem0'}}>
                <img src={book.volumeInfo.imageLinks.thumbnail} class="card-img-top book-img" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{book.volumeInfo.title}</h5>
                    <p><b>Published Date:</b> {book.volumeInfo.publishedDate}</p>
                    
                    <label for="detail">Check to view more 👉</label>
                    <input type="checkbox" id="detail" className="checkbox" />
                    
                    <div className="popup" id="popup">
                        <p><b>Author:</b> {book.volumeInfo.authors}</p>
                        {/* <p><b>?:</b> {book.volumeInfo.desription}</p> */}
                        <p><b>Category:</b> {book.volumeInfo.categories}</p>
                        <p><b>Subtitle:</b> {book.volumeInfo.subtitle}</p>
                        <p><b>No of Pages:</b> {book.volumeInfo.pageCount}</p>
                        <p><b>Publisher:</b> {book.volumeInfo.publisher}</p>
                        <p><b>Maturity Rating:</b> {book.volumeInfo.maturityRating}</p>
                        
                    </div>

                </div>
                </div>
            </div>
        )}
        </div>
           
        </div>
    )
}

export default Books;