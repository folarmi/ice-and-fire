import React from 'react';
import './App.css';
import Books from './Pages/Books';
import Characters from './Pages/Characters';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Books</Link>
            </li>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Books} />
          <Route path="/characters" component={Characters} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
