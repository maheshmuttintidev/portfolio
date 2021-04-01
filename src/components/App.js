import React, { Suspense, lazy } from "react"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Main from './Main'
import Skills from './Skills'
import Hobbies from './Hobbies'
import Interests from './Interests'
import "./style.css" 


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/skills" component={Skills} />
        <Route path="/hobbies" component={Hobbies} />
        <Route path="/interests" component={Interests} />
      </Switch>
    </Router>
  );
}

export default App;