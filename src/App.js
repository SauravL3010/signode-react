import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar'
import SiteList from './components/SiteList'

import { createTheme, ThemeProvider } from '@material-ui/core'
import OrderDetails from './components/OrderDetails';

const theme = createTheme({
  palette: {
    primary: {
      main: '#424242',
    },
    secondary: {
      main: 'rgb(255, 232, 232)',
    },
  }
})


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <SiteList />
        </Route>
        <Route exact path='/order'>
          <OrderDetails />
        </Route>
      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
