import Navbar from 'core/components/Navbar';
import Home from 'pages/home';
import Search from 'pages/search';
import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route,
} from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/search">
          <Search/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
