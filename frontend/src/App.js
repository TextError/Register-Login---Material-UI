import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Home from './components/home/Home';
import Register from './components/authentication/register/Register';
import Login from './components/authentication/login/Login';

// Layout
import Navbar from './Layout/navbar/Navbar';

// Css
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;