import React from 'react'
import '../style/index.css'

const Book = (props) => {
  const {img, title, author} = props.book
  return (
    <article className='book'>
      <img className='book-image' src={img} alt={title} />
      <h1 className='book-title'> {title} </h1>
      <p className='book-author'>{author}</p>
    </article>
  )
}

export default Book