import * as React from 'react'

const styles = {
  footerWrapper: {
    backgroundColor: 'red',
    width: '100%',
    height: 35,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  footerContent: {
    maxWidth: '768px',
    width: '100%',
    backgroundColor: 'green',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    lineHeight: '35px'
  }
};

const Footer = () => {
  return (
    <div style={styles.footerWrapper}>
      <header style={styles.footerContent}>
        <div>
          Made with lots of ☕ and 🤔
        </div>
      </header>
    </div>
  )
}

export default Footer