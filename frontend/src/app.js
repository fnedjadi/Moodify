import React from 'react';

import Header from './header/header.js';
import Home from './home/home.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;


/*<Router history = {browserHistory}>
<Route path = "/" component = {Index}>
  <Route path = "/first" component = {FirstPage}>
  <Route path = "/second" component = {SecondPage}>
</Route>
</Router>*/