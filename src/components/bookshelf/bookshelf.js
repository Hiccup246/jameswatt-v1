import React, { useEffect } from 'react'

import bookDark from '../../assets/book-dark.gif'
import bookLight from '../../assets/book-light.gif'

import Completed from '../../assets/svg/clipboard-check.svg'
import { ThemeContext } from '../theme-context/theme-context'

import './bookshelf.css'

const Bookshelf = () => {
  const { siteTheme, setSiteTheme } = React.useContext(ThemeContext)

  const books = [
    {
      name: "On Having No Head",
      author: "Tolkien",
      genre: "Fantasy",
      status: "Read",
      dateCompleted: ""
    },
    {
      name: "The Lord of the Rings The Return of the King",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      status: "Read",
      dateCompleted: ""
    },
    {
      name: "The Lord of the Rings The Two Towers",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      status: "Read",
      dateCompleted: ""
    },
    {
      name: "Lord of the Rings the Fellowship of the Ring",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      status: "Read",
      dateCompleted: ""
    },
    {
      name: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      status: "Read",
      dateCompleted: ""
    },
    {
      name: "12 Rules for Life: An Antidote to Chaos",
      author: "Jordan B. Peterson",
      genre: "Self Help",
      status: "Read",
      dateCompleted: ""
    },
    {
      name: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      genre: "History",
      status: "Read",
      dateCompleted: ""
    },
    {
      name: "Propaganda",
      author: "Edward L. Bernays",
      genre: "Psychology",
      status: "Read",
      dateCompleted: ""
    },
    {
      name: "Fear: Trump in the White House",
      author: "Bob Woodward",
      genre: "Politics",
      status: "Read",
      dateCompleted: ""
    },
    {
      name: "Animal Farm",
      author: "George Orwell",
      genre: "Politics",
      status: "Read",
      dateCompleted: ""
    },
    {
      name: "1984",
      author: "George Orwell",
      genre: "Politics",
      status: "Read",
      dateCompleted: ""
    },
    {
      name: "Manufacturing Consent",
      author: "Edward S. Herman, Noam Chomsky",
      genre: "Politics",
      status: "Read",
      dateCompleted: ""
    },
    {
      name: "The Power of Now",
      author: "Eckhart Tolle",
      genre: "Spirituality",
      status: "Read",
      dateCompleted: ""
    }
  ]

  const showHideBooks = (show) => {
    const shortBooksLength = 4
    const totalBooks = books.length

    for (let step = shortBooksLength; step < totalBooks; step++) {
      if (show) {
        document.getElementById("book-"+step).style.display = 'none'
      } else {
        document.getElementById("book-"+step).style.display = 'block'
      }
    }

    if(show) {
      document.getElementsByClassName("bookshelf__show-more")[0].innerHTML = "Show More"
    } else {
      document.getElementsByClassName("bookshelf__show-more")[0].innerHTML = "Show Less"
    }
  }

  const booksShowing = () => {
    if (document.getElementById("book-6") && document.getElementById("book-6").style.display === "auto") {
      return true;
    } else {
      return false;
    }
  }

  const getBookStatusIcon = (status) => {
    if (status === "Read") {
        return <Completed className='bookshelf__completed' />
    } else {
      return  <img
                  className="bookshelf__reading-icon"
                  src={siteTheme === 'dark' ? bookDark : bookLight}
                  alt="Currently reading"
                />
    }
  }

  const booksList = books.map((book, index) => {
    return (
      <tr key={index} id={"book-"+index}>
        <td className="bookshelf__name-cell">
          <h4>{book.name}</h4>
          <div>{book.author}</div>
        </td>
        <td className="bookshelf__genre-cell">{book.genre}</td>
        <td className="bookshelf__status-cell">
          { getBookStatusIcon(book.status) }
        </td>
      </tr>
    )
  })

  return (
    <div className="bookshelf" id="bookshelf">
      <h4>📚Bookshelf</h4>
      <div className="bookshelf__wrapper">
        <table className="bookshelf__table td_hide">
          {/* <caption>
          Bookshelf containing previously read and currently reading books
        </caption> */}
          <thead>
            <tr>
              <th>Book</th>
              <th className="bookshelf__genre-header">Genre</th>
              <th className="bookshelf__status-header">Status</th>
            </tr>
          </thead>
          <tbody>
            { booksList }
          </tbody>
        </table>

        <div className="bookshelf__show-more" onClick={() => showHideBooks(booksShowing() ? true : false)}>Show More</div>
      </div>
    </div>
  )
}

export default Bookshelf
