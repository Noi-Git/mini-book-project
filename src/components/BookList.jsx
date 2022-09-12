import React from 'react'
import {books} from './booksData'
import Book from './Book'

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