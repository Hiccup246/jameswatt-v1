import React, { useState } from 'react'

import { BOOKS } from '../../constants/books'
import BookshelfRow from './bookshelf-row/bookshelf-row'

import './bookshelf.css'

const Bookshelf = () => {
  const previewBooks = 4

  const renderBooks = (numberOfBooks) => {
    return BOOKS.slice(0, numberOfBooks).map((book, index) => {
      return <BookshelfRow key={index} book={book} />
    })
  }

  const [buttonText, setButtonText] = useState('Show More')
  const [books, setBooks] = useState(renderBooks(previewBooks))

  const showHideBooks = () => {
    if (buttonText === 'Show More') {
      setBooks(renderBooks(BOOKS.length))
      setButtonText('Show Less')
    } else {
      setBooks(renderBooks(previewBooks))
      setButtonText('Show More')
    }
  }

  return (
    <div className="bookshelf">
      <h2>📚 Bookshelf</h2>
      <div className="bookshelf__table-wrapper">
        <table className="bookshelf__table">
          <thead>
            <tr>
              <th>Book</th>
              <th className="bookshelf__genre-header">Genre</th>
              <th className="bookshelf__status-header">Status</th>
            </tr>
          </thead>
          <tbody>{books}</tbody>
        </table>

        <button
          aria-label="Show More Books"
          className="bookshelf__show-more-button"
          onClick={() => showHideBooks()}
        >
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default Bookshelf
