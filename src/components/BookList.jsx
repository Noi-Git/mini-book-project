import React from 'react'
import Book from './Book'

const firstBook = {
  id: 1,
  img: "https://m.media-amazon.com/images/I/91HHxxtA1wL._AC_UL640_FMwebp_QL65_.jpg",
  title: "The Wonderful Things You Will Be",
  author: "Emily Winfield Martin"
}

const secondBook = {
  id: 2,
  img: "https://m.media-amazon.com/images/I/81X3ijILdJL._AC_UL640_FMwebp_QL65_.jpg",
  title: "How to Catch a Mermaid",
  author: "Adam Wallace and Andy Elkerton"
}

const BookList = () => {
  return (
    <section className='booklist'>
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}>
        <p>The content in this paragraph is the one will show in the area where children props is being use</p> 
      </Book>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
    </section>
  )
}

export default BookList