import React from 'react';
import './NavBar.scss';

class NavBar extends React.Component {
  render() {
    return (
      /* Navigation Bar */
  	  <nav class="nav">
        <a href="index.html">Industrious</a>
    	<a href="index.html" className="menu" >Menu</a>        
  	  </nav>
    );
  }
}

export default NavBar;
