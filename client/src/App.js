import { Switch, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import NoMatch from './components/shared/NoMatch';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import MainNavbar from './components/shared/MainNavbar';

const App = () => (
  <>
    <MainNavbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />

      <Route component={NoMatch} />
    </Switch>
  </>
)


export default App;
