import * as React from 'react'

import About from '../components/about/about';
import BaseLayout from '../components/base-layout/base-layout';
import '../styles/global.css';
import { ThemeProvider } from '../components/theme-context/theme-context'

const IndexPage = () => (
  <ThemeProvider>
    <BaseLayout id="top">
      <About />
    </BaseLayout>
  </ThemeProvider>
)

export default IndexPage
