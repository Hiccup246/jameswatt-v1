import * as React from 'react'

import BaseLayout from '../components/base-layout/base-layout'
import '../styles/global.css'
import BlogHome from '../components/blog-home/blog-home'
import Seo from '../components/seo/seo'
import { ThemeProvider } from '../components/theme-context/theme-context'

const Blog = () => (
  <ThemeProvider>
    <BaseLayout id="blog">
      <Seo title="James Watt Blog" />
      <BlogHome />
    </BaseLayout>
  </ThemeProvider>
)

export default Blog
