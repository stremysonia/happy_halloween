import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer, Logo } from '../src/components/index.js'
import { Home, Motives, Psychology, FemaleSerialKillers, MaleSerialKillers } from './pages/index.js';


function App() {
    return (
        <>
          <Router>
            <Navbar/>
            <Logo/>
            <Switch>
              
              <Route exact path="/">
                <Home/>
                </Route>

              {/* <Route path="/MainPage">
                <MainPage/>
                </Route> */}

              <Route path="/Motives">
                <Motives/>
                </Route>

              <Route path="/Pschology">
                <Psychology/>
                </Route>

              <Route path="/FemaleSerialKillers">
                <FemaleSerialKillers/>
                </Route>

              <Route path="/MaleSerialKillers">
                <MaleSerialKillers/>
                </Route>

            </Switch>
            {/* <Footer/> */}
          </Router>
        </>
  );
}

export default App;
