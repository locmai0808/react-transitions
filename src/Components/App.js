import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './react-transitions.css';

import Home from './Home';
import SwipeUpPage from './PageExamples/SwipeUpPage'
import SwipeLeftPage from './PageExamples/SwipeLeftPage'
import SwipeRightPage from './PageExamples/SwipeRightPage'
import SwipeDownPage from './PageExamples/SwipeDownPage'
import FadeInPage from './PageExamples/FadeInPage'
import ScaleInPage from './PageExamples/ScaleInPage'
import DropInPage from './PageExamples/DropInPage'
import DropInRightPage from './PageExamples/DropInRightPage'
import DropInLeftPage from './PageExamples/DropInLeftPage'


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/swipe-up" component={SwipeUpPage} />
            <Route exact path="/swipe-left" component={SwipeLeftPage} />
            <Route exact path="/swipe-right" component={SwipeRightPage} />
            <Route exact path="/swipe-down" component={SwipeDownPage} />
            <Route exact path="/fade-in" component={FadeInPage} />
            <Route exact path="/scale-in" component={ScaleInPage} />
            <Route exact path="/drop-in" component={DropInPage} />
            <Route exact path="/drop-in-right" component={DropInRightPage} />
            <Route exact path="/drop-in-left" component={DropInLeftPage} />

          </div>
        </BrowserRouter>
    );
  }
}

export default App;