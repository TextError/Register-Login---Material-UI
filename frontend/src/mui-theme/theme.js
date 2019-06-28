import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#33c9dc',
      main: '#00bcd4',
      dark: '#008394',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff6333',
      main: '#ff3d00',
      dark: '#b22a00',
      contrastText: '#fff',
    }
  },
  overrides: {
    MuiInput: {
      underline: {
        '&:before': {
          borderBottom: `1px solid #33c9dc`,
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `2px solid #33c9dc`,
        }
      }
    }
  }
});

export default theme;