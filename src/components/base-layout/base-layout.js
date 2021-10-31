import * as React from 'react'

import Footer from '../footer/footer'
import Header from '../header/header'
import './base-layout.css'

const BaseLayout = ({ children }) => (
  <div className="app">
    <div className="app__wrapper">
      <Header />
      <div className="app__body">
        <main className="app__content">{children}</main>
      </div>
      <Footer />
    </div>
  </div>
)

export default BaseLayout
