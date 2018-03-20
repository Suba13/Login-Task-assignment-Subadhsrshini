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
  handleChangeLogin = (e) => {
    let login = {};
    let name = e.target.name;
    let value = e.target.value;
    login[name] = value;
    console.log(login)
    this.props.actions.userLogin(login);
  }
  
  handleLogin = (e) => {
    this.props.actions.userLoginCheck(e);
  }
  handleChangeEmail = (e) => {
    let email = {};
    let name = e.target.name;
    let value = e.target.value;
   email[name] = value;
    this.props.actions.resetPassword(email);
  }
  handleEmail = (e) => {
    console.log("email",e)
    this.props.actions.passwordChange(e);
  }
  passwordChange=(e)=>{
    let newpassword = {};
    let name = e.target.name;
    let value = e.target.value;
    newpassword[name] = value;
    console.log("password",newpassword)
    this.props.actions.newPassword(newpassword);
  }
  passwordChangeClick=(token,e)=>{
    console.log(e)
    let password=e.confirmpassword;
    if(e.newpassword!== e.confirmpassword) {
      alert("Passwords Don't Match");
    } else {
      if ( password.length < 5) {
        alert("Password needs to be atleast 5 characters long");
       }   
      else{
        let data={token,password}
        console.log("data",data)
       this.props.actions.newPasswordSubmit(data);
      }     
    } 
  }
  handleTextbox1=(e)=>{
    if(e.target.value===0){
    this.props.actions.button(0)
    }
    else{
      this.props.actions.button(1)
    }
}
handleTextbox2=(e)=>{
    if(e.target.value===0 && this.props.display===0){
      this.props.actions.buttonFinal(0)
    }
    else{
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
              <Login handleChangeLogin={this.handleChangeLogin}
                handleLogin={this.handleLogin}
                login={this.props.login}
                message={this.props.success.message}
                handleTextbox1={this.handleTextbox1}
                handleTextbox2={this.handleTextbox2}
                finaldisplay={this.props.finaldisplay}
                
              />
            )}
          />
          <Route
            path="/forget-password"
            render={props => (
              <ForgetPassword handleEmail={this.handleEmail}
                handleChangeEmail={this.handleChangeEmail}
                email={this.props.email}
                message={this.props.token.message}
                
              />
            )}
          />
          <Route
            path="/change-password/:id"
            render={props => (
              <ChangePassword    {...props}
              passwordChange={this.passwordChange}
              passwordChangeClick={this.passwordChangeClick}
              newpassword={this.props.newpassword}
              handleTextbox1={this.handleTextbox1}
                handleTextbox2={this.handleTextbox2}
                finaldisplay={this.props.finaldisplay}
              message={this.props.passwordsuccess.message}
              
              />
            )}
          />
          
          <Route  path="/product-page" component={Product} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users:state.users,
    login: state.login,
    success:state.success,
    email:state.email,
    token:state.token,
    newpassword:state.newpassword,
    passwordsuccess:state.passwordsuccess,
    finaldisplay:state.finaldisplay,
    display:state.display

  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }

}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));