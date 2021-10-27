import * as React from 'react'
import moon from '../assets/moon-solid.svg'

const styles = {
  headerWrapper: {
    // backgroundColor: 'blue',
    width: '100%',
    // height: "35px",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  headerContent: {
    maxWidth: '768px',
    width: '100%',
    // backgroundColor: 'green',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    // height: "35px",
    // lineHeight: '35px'
  },
  paraH: {
    // lineHeight: '35px',
  }
};

const Header = () => {
  return (
    <div style={styles.headerWrapper}>
      <div style={styles.headerContent}>
        <p>
          Home
        </p>
        <p>
          Blog
        </p>
        <p>
        <img style={{height: "19px"}} src={moon} alt='Moon' />
        </p>
      </div>
    </div>
  )
}

export default Header