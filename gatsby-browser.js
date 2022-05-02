// custom CSS styles
import './src/styles/global.css'

// Highlighting for code blocks
import 'prismjs/themes/prism.css'

// styles taken from blog post template
import './src/styles/blog-post-globals.css'
import React from 'react'

import BaseLayout from './src/components/base-layout/base-layout'
import { ThemeProvider } from './src/components/theme-context/theme-context'

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <ThemeProvider {...props}>
      <BaseLayout>{element}</BaseLayout>
    </ThemeProvider>
  )
}
