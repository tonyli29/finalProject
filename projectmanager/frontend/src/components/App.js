import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Houses from "./layout/houses";
import LandingPage from "./layout/landingPage";
import HouseView from "./layout/houseView";
import NavBar from "./layout/navBar";
import Testing from "./layout/testing";
import CityFilter from "./layout/cityFilter";
import Edit from "./layout/editview/edit";
import EditHouseView from "./layout/editview/editHouseView";
import AddHouse from "./layout/editview/add";
import About from "./staticPages/about";
import Contact from "./staticPages/contact";
import Register from "./layout/auth/register";
import Login from "./layout/auth/login";
import PrivateRoute from "./common/PrivateRoute";
import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";
import SearchCopy from "./searchCopy";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import FeaturedListings from "./layout/featured";

const App = props => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <div className="app">
        <header>
          <Router>
            <NavBar />
            <Switch>
              <Route exact path="/home" component={Houses} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/home/:id" component={HouseView} />
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/homeEdit/:id" component={EditHouseView} />
              <Route
                exact
                path="/neighbourhood/:neighbourhood"
                component={CityFilter}
              />
              <Route exact path="/featured" component={FeaturedListings} />

              {/* testing  */}
              <PrivateRoute exact path="/edit" component={Edit} />
              <Route exact path="/edit/add" component={AddHouse} />
            </Switch>
          </Router>
        </header>
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
export default App;
