import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// MUI
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './mui-theme/theme';

// Components
import Home from './components/home/Home';
import SignUp from './components/authentication/signUp/SignUp';
import SignIn from './components/authentication/signIn/SignIn';

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
                <Route exact path='/sign-up' component={SignUp} />
                <Route exact path='/sign-in' component={SignIn} />
              </Switch>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;