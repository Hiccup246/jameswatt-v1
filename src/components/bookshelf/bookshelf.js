import * as React from 'react'

import reading from '../../assets/book.gif'
import completed from '../../assets/clipboard-check.svg'

import './bookshelf.css'

const Bookshelf = () => (
  <div class="bookshelf">
    <h4>📚Bookshelf</h4>
    <div class="bookshelf__wrapper">
      <table class="bookshelf__table td_hide">
        {/* <caption>
        Bookshelf containing previously read and currently reading books
      </caption> */}
        <thead>
          <tr>
            <th>Book</th>
            <th class="bookshelf__genre-header">Genre</th>
            <th class="bookshelf__status-header">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="bookshelf__name-cell">
              <h4>Lord of the rings</h4>
              <div>Tolkien</div>
            </td>
            <td class="bookshelf__genre-cell">Fantasy</td>
            <td class="bookshelf__status-cell">
              <img
                class="bookshelf__reading-icon"
                src={reading}
                alt="Currently reading"
              />
            </td>
          </tr>
          <tr>
            <td class="bookshelf__name-cell">
              <h4>Fear and loathing los vegas with harrry potter in the mix</h4>
              <div>Bob woodward</div>
            </td>
            <td class="bookshelf__genre-cell">Politics</td>
            <td class="bookshelf__status-cell">
              <img
                class="bookshelf__completed-icon"
                src={completed}
                alt="Completed reading"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

export default Bookshelf