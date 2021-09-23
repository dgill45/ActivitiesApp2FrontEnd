import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home"
import ActivitiesPage from "./components/ActivitiesPage";
import ActivityDetails from "./components/ActivityDetails";
import UsersPage from './components/UsersPage';
import UserDetails from './components/UserDetails';
import NavBar from "./components/NavBar";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div className="App">
          <NavBar />
            <Switch>
            <Route exact path= "/">
              <Home />
            </Route>
            <Route path = '/activities/:id'>
              <ActivityDetails />
            </Route>
            <Route path = "/activities">
              <ActivitiesPage />
            </Route>
            <Route path = '/users/:id'>
              <UserDetails />
            </Route>
            <Route path = "/users">
              <UsersPage />
            </Route>
            <Route path = "*">
              <h1>404 Not Found</h1>
            </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
