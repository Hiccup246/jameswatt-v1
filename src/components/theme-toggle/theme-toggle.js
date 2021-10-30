import * as React from 'react'
import moon from '../../assets/moon-regular.svg'
import sun from '../../assets/sun-regular.svg'
import './theme-toggle.css'
import { ThemeContext } from '../theme-context/theme-context';


// class ThemeToggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { theme: 'light' };
//     this.toggleTheme = this.toggleTheme.bind(this);
//     this.getIcon = this.getIcon.bind(this);
//   }

//   toggleTheme() {
//     this.setState({ theme: this.state.theme == 'light' ? 'dark' : 'light' });
//   }

//   getIcon() {
//     if (this.state.theme == 'light') {
//       return(<img className="theme-toggle__theme-icon" src={moon} alt='Moon'/>)
//     } else {
//       return(<img className="theme-toggle__theme-icon" src={sun} alt='Sun'/>)
//     }
//   }

//   render() {
//     return (
//       <div className='theme-toggle' onClick={this.toggleTheme}>
//       { this.getIcon() }
//       {/* <img className="" src={sun} alt='Sun'/> */}
//     </div>
//     )
//   }
// }



// export default ThemeToggle

function getSun() {
  return(<img className="theme-toggle__theme-icon" src={sun} alt='Sun'/>)
}

function getMoon() {
  return(<img className="theme-toggle__theme-icon" src={moon} alt='Moon'/>)
}

const ThemeToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  return (
    <div className='theme-toggle' onClick={() => setColorMode(colorMode == 'light' ? 'dark' : 'light')}>
    { colorMode === 'dark' ? getSun() : getMoon() }
  </div>
  )
  
};

export default ThemeToggle;