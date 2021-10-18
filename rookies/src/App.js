import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin from 'pages/Admin/Admin';
import Index from 'pages/Indexpage';
import Login from 'pages/Login';
import Pdtos from 'pages/Admin/Pdtos';
import RolesUsuarios from 'pages/Admin/RolesUs';
import Vtas from 'pages/Admin/Vtas';
import PublicLayout from 'layouts/PublicLayout';
import PrivateLayout from 'layouts/PrivateLayouts';
import AuthLayout from 'layouts/AutheLayout';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path= {['/Admin/Admin', '/Admin/Pdtos', '/Admin/Vtas', '/Admin/RolesUsu', '/pages/Login']}>
            <PrivateLayout>
              <Switch>
                <Route path ="/Admin/Admin">
                  <Admin />
                </Route>
                <Route path ="/Admin/Pdtos">
                  <Pdtos />
                </Route>
                <Route path ="/Admin/Vtas">
                  <Vtas />
                </Route>
                <Route path ="/Admin/RolesUsu">
                  <RolesUsuarios />
                </Route>
              </Switch>
            </PrivateLayout>
          </Route>
          <Route path= {['/pages/Login']}>
            <AuthLayout>
              <Route path ="/pages/Login">
                <Login />
              </Route>
            </AuthLayout>
          </Route>
          <Route path = {['/']}>
            <PublicLayout>
              <Route path ="/">
                <Index />
              </Route>
            </PublicLayout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
