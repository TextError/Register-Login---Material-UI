import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// MUI
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './mui-theme/theme';

// Components
import Home from './components/home/Home';
import Register from './components/authentication/register/Register';
import Login from './components/authentication/login/Login';

// Redux
import store from './store';
import { Provider } from 'react-redux';

// Layout
import Navbar from './Layout/navbar/Navbar';

// Css
import './css/app.css';

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <div className='App'>
          <Router>
            <Navbar />
            <div className=''>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
              </Switch>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;