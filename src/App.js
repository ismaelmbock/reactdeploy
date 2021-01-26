import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const Layout = React.lazy(() => import('./components/Layout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));

class App extends Component {
  render(){
    return(
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route path="/" name="Home" render={props => <Layout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    )
  }
}

export default App;
