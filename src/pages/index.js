import * as React from 'react'

import About from '../components/about/about';
import Author from '../components/author/author'
import BaseLayout from '../components/base-layout/base-layout'
import Bookshelf from '../components/bookshelf/bookshelf'
import '../styles/global.css'
import ProgrammingHistory from '../components/programming-history/programming-history'
import Projects from '../components/projects/projects'
import TechnologySkills from '../components/technology-skills/technology-skills'
import { ThemeProvider } from '../components/theme-context/theme-context'
import Credits from '../components/credits/credits'
import Seo from '../components/seo/seo'

const IndexPage = () => (
  <ThemeProvider>
    <BaseLayout id="top">
      <Seo title="James Watt"/>
      <Author />
      <About />
      <ProgrammingHistory />
      <TechnologySkills />
      <Projects />
      <Bookshelf />
      <Credits />
    </BaseLayout>
  </ThemeProvider>
)

export default IndexPage
