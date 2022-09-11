import React from 'react'
import '../style/index.css'

const Book = ({img, title, author, children}) => {
  // const {img, title, author} = props
  return (
    <article className='book'>
      <img className='book-image' src={img} alt={title} />
      <h1 className='book-title'> {title} </h1>
      <p className='book-author'>{author}</p>
      {children}
      {/* props.children --- if destructure it as constant */}
    </article>
  )
}

export default Book