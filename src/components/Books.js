import React, {useContext, useEffect} from "react";
import {BooksContext} from "../context/booksContext";
import {useLocation} from "react-router-dom";


export default function Books(){
    const query = new URLSearchParams(useLocation().search)
    const search = query.get('search') || ''
    const books = useContext(BooksContext);
    const filteredBooks = books.filter(b => b.title.toLowerCase()
        .includes(search.toLowerCase()));
    return(
        <div>
            <h3>Books</h3>
            <ul>
            {
                filteredBooks.map(book =>(
                <li key={book.id}> {book.title} by  {book.author}</li>
                ))
            }
            </ul>
        </div>
    );
}