import * as React from 'react'

import './bookshelf.css'

const Bookshelf = () => (
  <div class="bookshelf">
    <h4>📚Bookshelf</h4>
    <div class="bookshelf__wrapper">
      <table class="bookshelf__table">
        {/* <caption>
        Bookshelf containing previously read and currently reading books
      </caption> */}
        <thead>
          <tr>
            <th>Book</th>
            <th>Genre</th>
            <th class="booksheld__status">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <h4>Lord of the rings</h4>
              <div>Tolkien</div>
            </td>
            <td>Fantasy</td>
            <td class="booksheld__status">📚</td>
          </tr>
          <tr>
            <td>
              <h4>Fear</h4>
              <div>Bob woodward</div>
            </td>
            <td>Politics</td>
            <td class="booksheld__status">📚</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

export default Bookshelf
