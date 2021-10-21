import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import AllCurrencies from './components/AllCurrencies';
import AllStats from './components/AllStats';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/Allcurrencies" component={AllCurrencies} />
          <Route path="/details/:id" component={AllStats} />
          <Redirect from="/" to="/Allcurrencies" />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
