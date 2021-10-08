import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Index from './pages/Indexpage';
import Admin from './pages/Admin';
import Pdtos from './pages/Pdtos';
import RolesUsuarios from './pages/RolesUs';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path ="/login">
            <Login />
          </Route>
          <Route path ="/Admin">
            <Admin />
          </Route>
          <Route path ="/Pdtos">
            <Pdtos />
          </Route>
          <Route path ="/Vtas">
            <Vtas />
          </Route>
          <Route path ="/RolesUsu">
            <RolesUsuarios />
          </Route>
          <Route path ="/">
            <Index />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
