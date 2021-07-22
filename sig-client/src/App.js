import './style/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import SiteList from './components/SiteList/SiteList';
import TableData from './components/Table/TableData'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path = '/'>
            <SiteList />
          </Route>
          <Route exact path = '/:site'>
            <TableData />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
