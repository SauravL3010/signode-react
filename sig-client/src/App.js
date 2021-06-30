import './style/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import SiteList from './components/SiteList';

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
