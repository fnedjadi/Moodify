import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import cookie from 'react-cookies';

import Header from './header/header.js';
import Footer from './footer/footer.js';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./home/home.js'),
  loading: Loading,
});

const Create = Loadable({
  loader: () => import('./create/create.js'),
  loading: Loading,
});

const FAQ = Loadable({
  loader: () => import('./faq/faq.js'),
  loading: Loading,
});

const Contact = Loadable({
  loader: () => import('./contact/contact.js'),
  loading: Loading,
});

const Compose = Loadable({
  loader: () => import('./contact/compose.js'),
  loading: Loading,
});

const App = () => (
  <div>
    <Header/>
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/create" component={() => (
          cookie.load('spotify_access_token') ? (
            <Create/>
          ) : (
            <Redirect to="/"/>
          )
        )}/>
        <Route path="/faq" component={FAQ}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/compose" component={Compose}/>
      </Switch>
    </Router>
    <Footer/>
  </div>
);

export default App;