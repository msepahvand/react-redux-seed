import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import Home from '../home'
import About from '../about'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Switch> 
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </main>
  </div>
)

export default App