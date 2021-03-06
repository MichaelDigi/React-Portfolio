import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import SmoothScroll from './components/SmoothScroll';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <SmoothScroll>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </SmoothScroll>
      </Router>
    </>
  );
}
