import React, { Component } from 'react';
import './App.css';
class Header extends Component {
  render() {
    return (
      
<div className="topnav" >
  <ul>
  <li> <a className="active" href="#home">Home</a></li> 
<li> <a href="#contact">Contact</a></li> 
<li> <a href="#about">About</a></li> 
  </ul>
</div>

    );
  }
}

export default Header;
