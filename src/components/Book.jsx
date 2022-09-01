import React from 'react'
import '../style/index.css'

// {
//   "books" [ 
//     {
//     "id": 1,
//     "img": "https://m.media-amazon.com/images/I/91HHxxtA1wL._AC_UL640_FMwebp_QL65_.jpg",
//     "title": "The Wonderful Things You Will Be",
//     "author": "Emily Winfield Martin"
//     }
//   ]
// }

const Book = () => {
  return (
    <article className='book'>
      <img className='book-image' src="https://m.media-amazon.com/images/I/91HHxxtA1wL._AC_UL640_FMwebp_QL65_.jpg" alt="The Wonderful Things You Will Be" />
      <h1 className='book-title'>The Wonderful Things You Will Be</h1>
      <p className='book-author'>Emily Winfield Martin</p>
      </article>
  )
}

export default Book