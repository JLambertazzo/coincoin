import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Home from './views/Home'
import Women from './views/Women'
import Men from './views/Men'

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
                <Route exact path='/women' render={() =>
                    (<Women/>)}
                />
                <Route exact path='/men' render={() =>
                    (<Men/>)}
                />
              </Switch>
          </BrowserRouter>
        </div>
  );
  }
  }
  export default App;
