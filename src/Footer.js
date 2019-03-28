import React, { Component } from 'react';
import './App.css';
class Footer extends Component {
  render() {
    return (
      
      <React.Fragment>

    <div class="footer-left">

      <h3>Company<span>logo</span></h3>

      <p class="footer-links">
        <a href="#">Home</a>
        ·
        <a href="#">About</a>
        ·
        <a href="#">Contact</a>
      </p>

      <p class="footer-company-name">Company Name &copy; 2015</p>
    </div>

    <div class="footer-center">

      <div>
        <i class="fa fa-map-marker"></i>
        <p><span>21 Revolution Street</span> Paris, France</p>
      </div>

      <div>
        <i class="fa fa-phone"></i>
        <p>+1 555 123456</p>
      </div>

      <div>
        <i class="fa fa-envelope"></i>
      
      </div>

    </div>

    <div class="footer-right">

      <p class="footer-company-about">
        <span>About the company</span>
        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
      </p>

      <div class="footer-icons">

        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-github"></i></a>

      </div>

    </div>
    
    </React.Fragment>

    );
  }
}

export default Footer;
