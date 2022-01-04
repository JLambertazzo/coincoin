import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Home from './views/Home'

class App extends React.Component {
  render() {
    return (
        <div>
          <BrowserRouter>
            <Switch>

              <Route
                  exact path='/'
                  render={() => (<Redirect to='/home'/>)}
              />

              <Route exact path='/home' render={() =>
                  (<Home/>)}
              />
              </Switch>
          </BrowserRouter>
        </div>
  );
  }
  }
  export default App;
