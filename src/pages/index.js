import * as React from 'react'
import BaseLayout from '../components/base-layout/base-layout'
import About from '../components/About'
import "../styles/global.css"

const IndexPage = () => {
  return (
    <BaseLayout>
      <About/>
    </BaseLayout>
  )
}

export default IndexPage