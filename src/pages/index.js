import * as React from 'react'
import BaseLayout from '../components/base-layout/base-layout'
import About from '../components/About'
import "../styles/global.css"
import { ThemeProvider } from '../components/theme-context/theme-context'

const IndexPage = () => {
  return (
    <ThemeProvider>
      <BaseLayout>
        <About/>
      </BaseLayout>
    </ThemeProvider>
  )
}

export default IndexPage