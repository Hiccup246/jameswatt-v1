import * as React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import './base-layout.css'

const BaseLayout = ({ children }) => {
  return (
    <div className="app">
      <div className="app__wrapper">
        <Header/>
        <div className="app__body">
          <main className="app__content">
            {children}
          </main>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default BaseLayout
