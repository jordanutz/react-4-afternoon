import React, { Component } from 'react';
import routes from './routes.js'
import {Link} from 'react-router-dom'
import About from './Components/About/About'

class App extends Component {
  render() {
    return (
      <div>
        <nav className='nav'>
          <div>WestSide University</div>
          <div className='link-wrap'>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
          </div>
        </nav>
        {routes}
      </div>
    )
  }
}

export default App
