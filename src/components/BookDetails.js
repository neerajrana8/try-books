import React, {useContext, useEffect} from "react";
import {BooksContext} from "../context/booksContext";
import {useParams} from "react-router-dom";

export default function BookDetails(){

    const {bookId} = useParams();
    const books = useContext(BooksContext);
  const book =   books.find((book) => book.id === parseInt(bookId));

  if (books.length === 0){
      return <div>Loading...</div>
  }
  if (!book){
      return( <div>Book Not found</div>)
  }else {
      return (<div>
          <h2>{book.title}</h2>
          <h4>{book.author}</h4>
          <p>{book.description}</p>
      </div>);
  }
}

