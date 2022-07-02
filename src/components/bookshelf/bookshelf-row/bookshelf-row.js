import React from 'react'

import bookDark from '../../../assets/book-dark-2.gif'
import bookLight from '../../../assets/book-light.gif'
import Completed from '../../../assets/svg/clipboard-check.svg'
import { ThemeContext } from '../../theme-context/theme-context'

import './bookshelf-row.css'

const BookshelfRow = ({ book }) => {
  const { siteTheme } = React.useContext(ThemeContext)

  function getBookStatusIcon(status) {
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

  return (
    <tr>
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
}

export default BookshelfRow
