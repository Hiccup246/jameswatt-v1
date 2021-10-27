import * as React from 'react'
import Header from './Header'
import Footer from './Footer'

const styles = {
  app:{
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '100%'
  },
  content: {
    // backgroundColor: 'grey',
    minHeight: '100%',
    width: '100%', display: 'flex',
    flexDirection: 'column'
  },
  bodyWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    display: 'flex',
    flex: 1
  },
  body: {
    width: '100%',
    minHeight: '100%',
    maxWidth: 768,
    // backgroundColor: 'orange'
  }
};

const Layout = ({ children }) => {
  return (
    <div style={styles.app}>
      <div style={styles.content}>
        <Header/>
        <div style={styles.bodyWrapper}>
          <main style={styles.body}>
            {children}
          </main>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Layout
