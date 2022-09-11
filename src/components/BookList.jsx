import React from 'react'
import Book from './Book'


const books = [ 
  {
  "id": 1,
  "img": "https://m.media-amazon.com/images/I/91HHxxtA1wL._AC_UL640_FMwebp_QL65_.jpg",
  "title": "The Wonderful Things You Will Be",
  "author": "Emily Winfield Martin"
  },
  {
    "id": 2,
    "img": "https://m.media-amazon.com/images/I/81X3ijILdJL._AC_UL640_FMwebp_QL65_.jpg",
    "title": "How to Catch a Mermaid",
    "author": "Adam Wallace and Andy Elkerton"
    },
    {
      "id": 3,
      "img": "https://m.media-amazon.com/images/I/812oNxmfS0L._AC_UL640_FMwebp_QL65_.jpg",
      "title": "The Good Egg",
      "author": "Jory John and Pete Oswald"
      }
]

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map( book => {
        return (
          <Book  key={book.id} {...book}></Book>
        )
      })}
    </section>
  )
}

export default BookList