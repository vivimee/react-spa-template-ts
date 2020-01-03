import React, { Component } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { AppContainer } from "react-hot-loader";
import { createStore } from "redux";
import { Provider } from "react-redux";
import routes from "../../core/route";
import NavContainer from "../NavContainer/index";
import rootReducer from "../../redux/rootReducer";

const store = createStore(rootReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer>
          <Router>
            <NavContainer />
            <Switch>
              {routes.map((item, idx) => (
                <Route key={idx} {...item}>
                  <item.Component />
                </Route>
              ))}
            </Switch>
          </Router>
        </AppContainer>
      </Provider>
    );
  }
}
