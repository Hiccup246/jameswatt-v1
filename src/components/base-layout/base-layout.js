import * as React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import './base-layout.css'

const BaseLayout = ({ children }) => {
  return (
    <div className="app">
      <div className="app__content">
        <Header/>
        <div className="app__content__body">
          <main className="app__content__body__content">
            {children}
          </main>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default BaseLayout
