import * as React from 'react'

import '../styles/not-found.css'

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <title>Not found</title>
      <h1>Page not found</h1>
      <p>
        Sorry{' '}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{' '}
        we couldn’t find what you were looking for.
      </p>
    </div>
  )
}

export default NotFoundPage
