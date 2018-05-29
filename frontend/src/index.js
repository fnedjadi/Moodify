import React from 'react';
import ReactDOM from 'react-dom';
//import {Router, Route} from 'react-router';

import App from './app.js';
// import Create from './create/create.js'
// import FAQ from './faq/faq.js'
// import Contact from './contact/contact.js'

let element = document.getElementById('root')

/*ReactDOM.render(
  <Router>
    <Route path = "/" component = {App}/>
    <Route path = "/create" component = {Create}/>
    <Route path = "/faq" component = {FAQ}/>
    <Route path = "/contact" component = {Contact}/>
  </Router>, 
  element
);*/

ReactDOM.render(
  <App/>, element
);