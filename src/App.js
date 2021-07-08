import React from 'react';
import './css/App.css';
import logo from './imgs/logo.png';
import Players from './playerList.js';
import{
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

const App = () => (
  <Router>
    <div className='App'>
      <header className='App-header'>
        <Link to='/'>
          <img src={logo} className='App-logo' alt='logo' />
        </Link>
      </header>
      <Switch>
        <Route exact path='/' component={Players}/>
        <Route path='/:id' component={Test}/>
      </Switch>
    </div>
  </Router>
);

export default App;

const Test = ({ match }) => (
  <h1>{match.params.id.name}</h1>
  
)