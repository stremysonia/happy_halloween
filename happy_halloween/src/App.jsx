import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {  } from '../src/components/index.js'
import { Home } from './pages/index.js'

function App() {
    return (
        <>
          <Router>
            <Switch>
              
              <Route exact path="/">
                <Home/>
              </Route>
            </Switch>
          </Router>
        </>
  );
}

export default App;
