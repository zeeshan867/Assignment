import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
 import Footer from './Footer';
import * as serviceWorker from './serviceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
 import About from './About';
/*
const element=<div>
                <App />
                <Header/>
                <Footer/>
            </div>

ReactDOM.render(element, document.getElementById('root'));
*/

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Header />, document.getElementById('Header'));
ReactDOM.render(<Footer/>, document.getElementById('footer')); 
ReactDOM.render(<About/>, document.getElementById('about')); 


serviceWorker.unregister();
