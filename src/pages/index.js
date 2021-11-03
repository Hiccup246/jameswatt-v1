import * as React from 'react'

import About from '../components/about/about';
import Author from '../components/author/author'
import BaseLayout from '../components/base-layout/base-layout'
import Bookshelf from '../components/bookshelf/bookshelf'
import '../styles/global.css'
import ProgrammingHistory from '../components/programming-history/programming-history'
import TechnologySkills from '../components/technology-skills/technology-skills'
import { ThemeProvider } from '../components/theme-context/theme-context'

const IndexPage = () => (
  <ThemeProvider>
    <BaseLayout id="top">
      <Author />
      <About />
      <ProgrammingHistory />
      <TechnologySkills />
      <Bookshelf />
    </BaseLayout>
  </ThemeProvider>
)

export default IndexPage
