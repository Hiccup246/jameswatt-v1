import * as React from 'react'

import Footer from '../footer/footer'
import Header from '../header/header'
import './base-layout.css'

const BaseLayout = ({ children }) => (
  <div class="app">
    <div class="app__wrapper">
      <Header />
      <div class="app__body">
        <main class="app__content">{children}</main>
      </div>
      <Footer />
    </div>
  </div>
)

export default BaseLayout
