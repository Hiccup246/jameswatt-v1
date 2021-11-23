import * as React from 'react'

import About from '../components/about/about';
import Author from '../components/author/author'
import BaseLayout from '../components/base-layout/base-layout'
import Bookshelf from '../components/bookshelf/bookshelf'
import '../styles/global.css'
import Credits from '../components/credits/credits'
import LanguageSkills from '../components/language-skills/language-skills'
import ProgrammingHistory from '../components/programming-history/programming-history'
import Projects from '../components/projects/projects'
import Seo from '../components/seo/seo'
import { ThemeProvider } from '../components/theme-context/theme-context'
import ToolSkills from '../components/tool-skills/tool-skills'

const IndexPage = () => (
  <ThemeProvider>
    <BaseLayout id="top">
      <Seo title="James Watt" />
      <Author />
      <About />
      <ProgrammingHistory />
      <LanguageSkills />
      <ToolSkills />
      <Projects />
      <Bookshelf />
      <Credits />
    </BaseLayout>
  </ThemeProvider>
)

export default IndexPage
