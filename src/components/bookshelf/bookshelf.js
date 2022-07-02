import React, { useState } from 'react'

import bookDark from '../../assets/book-dark-2.gif'
import bookLight from '../../assets/book-light.gif'
import Completed from '../../assets/svg/clipboard-check.svg'
import { BOOKS } from '../../constants/books'
import { ThemeContext } from '../theme-context/theme-context'

import './bookshelf.css'

const Bookshelf = () => {
  const { siteTheme } = React.useContext(ThemeContext)
  const previewBooks = 4
  const [buttonText, setButtonText] = useState('Show More')

  const showHideBooks = () => {
    const totalBooks = BOOKS.length

    for (let step = previewBooks; step < totalBooks; step++) {
      document.getElementById('book-' + step).classList.toggle('inactive')
    }

    if (buttonText === 'Show More') {
      setButtonText('Show Less')
      console.log('HERE')
    } else {
      setButtonText('Show More')
    }
  }

  const getBookStatusIcon = (status) => {
    if (status === 'Read') {
      return <Completed className="bookshelf__completed" />
    } else {
      return (
        <img
          width="19px"
          height="19px"
          className="bookshelf__reading-icon"
          src={siteTheme === 'dark' ? bookDark : bookLight}
          alt="Currently reading"
        />
      )
    }
  }

  const booksList = BOOKS.map((book, index) => {
    return (
      <tr
        key={index}
        id={'book-' + index}
        className={index > 3 ? 'inactive' : ''}
      >
        <td className="bookshelf__name-cell">
          <h3>{book.name}</h3>
          <div>{book.author}</div>
        </td>
        <td className="bookshelf__genre-cell">{book.genre}</td>
        <td className="bookshelf__status-cell">
          {getBookStatusIcon(book.status)}
        </td>
      </tr>
    )
  })

  return (
    <div className="bookshelf" id="bookshelf">
      <h2>📚 Bookshelf</h2>
      <div className="bookshelf__wrapper">
        <table className="bookshelf__table">
          <thead>
            <tr>
              <th>Book</th>
              <th className="bookshelf__genre-header">Genre</th>
              <th className="bookshelf__status-header">Status</th>
            </tr>
          </thead>
          <tbody>{booksList}</tbody>
        </table>

        <button
          aria-label="Show More Books"
          className="bookshelf__show-more"
          onClick={() => showHideBooks()}
        >
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default Bookshelf
