import * as React from 'react'
import BaseLayout from '../components/BaseLayout'
import About from '../components/About'
import "../styles/global.scss"

const IndexPage = () => {
  return (
    <BaseLayout>
      <About/>
    </BaseLayout>
  )
}

export default IndexPage