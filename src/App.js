import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import SmoothScroll from './components/SmoothScroll';
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <SmoothScroll>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </SmoothScroll>
      </Router>
    </>
  );
}
