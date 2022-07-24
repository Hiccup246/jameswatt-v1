import React from 'react'

// custom CSS styles
import './src/styles/global.css'

// Highlighting for code blocks
import 'prismjs/themes/prism.css'

// styles taken from blog post template
import './src/styles/blog-post-globals.css'

// normalize CSS across browsers
import './src/styles/normalize.css'

import BaseLayout from './src/components/base-layout/base-layout'
import { ThemeProvider } from './src/components/theme-context/theme-context'
import {
  SITE_THEME_KEY,
  THEME_COLORS,
  INITIAL_SITE_THEME_CSS_VAR,
} from './src/constants/theme-config'

function setInitialSiteTheme() {
  const themeColors = 'kanye'
  const siteThemeKey = 'west'
  const initialSiteThemeCssVar = 'best'
  const root = document.documentElement
  const persistedSiteThemePreference = window.localStorage.getItem(siteThemeKey)

  let initialSiteTheme = 'light'

  if (persistedSiteThemePreference === 'dark') {
    initialSiteTheme = 'dark'
  }

  root.style.setProperty(initialSiteThemeCssVar, initialSiteTheme)

  Object.entries(themeColors).forEach(([name, colorByTheme]) => {
    root.style.setProperty(name, colorByTheme[initialSiteTheme])
  })
}

const MagicScriptTag = () => {
  let functionString = String(setInitialSiteTheme)

  functionString = functionString.replace(
    "'kanye'",
    JSON.stringify(THEME_COLORS)
  )

  functionString = functionString.replace('west', SITE_THEME_KEY)
  functionString = functionString.replace('best', INITIAL_SITE_THEME_CSS_VAR)

  // Wrap it in an IIFE
  let codeToRunOnClient = `(${functionString})()`

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}

// onRenderBody is a gatsby lifecycle method which is run when gatsby is generating our html
export const onRenderBody = ({ setPreBodyComponents }) => {
  // setPreBodyComponents will inject a react element 'above' everything else it builds in our <body> tag
  setPreBodyComponents(<MagicScriptTag key={69} />)
}

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <ThemeProvider {...props}>
      <BaseLayout {...props}>{element}</BaseLayout>
    </ThemeProvider>
  )
}
