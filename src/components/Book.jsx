import React from 'react'
import '../style/index.css'

const Book = ({img, title, author}) => {
  const  clickHandler = () => {

  }
  return (
    <article className='book'>
      <img className='book-image' src={img} alt={title} />
      <h1 className='book-title'> {title} </h1>
      <p className='book-author'>{author}</p>
      <button type="button onClick={() => clickHandler()}">reference example</button>
    </article>
  )
}

export default Book