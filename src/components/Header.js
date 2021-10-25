import * as React from 'react'

const styles = {
  headerWrapper: {
    backgroundColor: 'blue',
    width: '100%',
    height: 35,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  headerContent: {
    maxWidth: '768px',
    width: '100%',
    backgroundColor: 'green',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    lineHeight: '35px'
  }
};

const Header = () => {
  return (
    <div style={styles.headerWrapper}>
      <header style={styles.headerContent}>
        <div>
          Home
        </div>
        <div>
          Icon
        </div>
      </header>
    </div>
  )
}

export default Header