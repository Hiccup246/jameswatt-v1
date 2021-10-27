import * as React from 'react'

const styles = {
  footerWrapper: {
    // backgroundColor: 'red',
    width: '100%',
    height: 35,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  footerContent: {
    maxWidth: '768px',
    width: '100%',
    // backgroundColor: 'green',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    lineHeight: '35px'
  },
  pH: {
    margin: 0,
    padding: 0,
    lineHeight: '35px'
  }
};

const Footer = () => {
  return (
    <div style={styles.footerWrapper}>
      <footer style={styles.footerContent}>
        <p style={styles.pH}>
          Made with lots of ☕ and 🤔
        </p>
      </footer>
    </div>
  )
}

export default Footer