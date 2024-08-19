import React, {useContext} from "react";
import {BooksContext} from "../context/booksContext";

export default function Books(){
    const books = useContext(BooksContext);

    return(
        <div>
            <h3>Books</h3>
            <ul>
            {
                books.map(book =>(
                <li> {book.title} by  {book.author}</li>
                ))
            }
            </ul>
        </div>
    );
}