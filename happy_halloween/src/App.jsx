import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from '../src/components/index.js'
import { Home, Types, Psychology, FemaleSerialKillers, MaleSerialKillers }from './pages/index.js'

function App() {
    return (
        <>
          <Router>
            {/* <Navbar/> */}
            <Switch>
              
              <Route exact path="/">
                <Home/>
                </Route>

              <Route path="./Types">
                <Types/>
                </Route>

              <Route path="./Pschology">
                <Psychology/>
                </Route>

              <Route path="./FemaleSerialKillers">
                <FemaleSerialKillers/>
                </Route>

              <Route path="./MaleSerialKillers">
                <MaleSerialKillers/>
                </Route>

            </Switch>
          </Router>
        </>
  );
}

export default App;
