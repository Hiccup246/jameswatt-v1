import * as React from 'react'
import styled from "styled-components"

const FooterC = styled.div`
  max-width: 768px;
  width: 100%;
  flex-direction: row;
  display: flex;
  justify-content: center;
  line-height: 35px;
  background-color: ${({ theme }) => theme.main};
`

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
      <FooterC>
        <p style={styles.pH}>
          Made with lots of ☕ and 🤔
        </p>
      </FooterC>
    </div>
  )
}

export default Footer