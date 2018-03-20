import React, { Component } from 'react';
import Login from './component/Login';
import ForgetPassword from './component/Forgetpassword';
import ChangePassword from './component/Changepassword';
import Product from './component/Product';
import { Route, Switch } from "react-router-dom";
import { withRouter } from 'react-router';
import { bindActionCreators } from "redux";
import * as userActions from "./actionCreators/User";
import { connect } from "react-redux";


class App extends Component {

  componentWillMount() {
    this.props.actions.userData();
  }
  handleTextbox1 = (e) => {
    if (e.target.value === 0) {
      this.props.actions.button(0)
    }
    else {
      this.props.actions.button(1)
    }
  }
  handleTextbox2 = (e) => {
    if (e.target.value === 0 && this.props.display === 0) {
      this.props.actions.buttonFinal(0)
    }
    else {
      this.props.actions.buttonFinal(1)
    }
  }
  render() {

    return (
      <div>
        <Switch>
          <Route
            exact path="/"
            render={props => (
              <Login
                login={this.props.login}
                handleTextbox1={this.handleTextbox1}
                handleTextbox2={this.handleTextbox2}
                finaldisplay={this.props.finaldisplay}

              />
            )}
          />
          <Route
            path="/forget-password"
            component={ForgetPassword}
          />
          <Route
            path="/change-password/:id"
            render={props => (
              <ChangePassword    {...props}
                handleTextbox1={this.handleTextbox1}
                handleTextbox2={this.handleTextbox2}
                finaldisplay={this.props.finaldisplay}
              />
            )}
          />

          <Route path="/product-page" component={Product} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    finaldisplay: state.finaldisplay,
    display: state.display

  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }

}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));