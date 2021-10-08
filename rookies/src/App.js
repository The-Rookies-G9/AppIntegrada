import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin from './pages/Admin';
import Index from 'pages/Indexpage';
import Login from 'pages/Login';
import Pdtos from 'pages/Pdtos';
import RolesUsuarios from 'pages/RolesUs';
import Vtas from 'pages/Vtas';
import PublicLayout from 'layouts/PublicLayout';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path ="/Login">
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
            <PublicLayout>
              <Index />
            </PublicLayout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
