import React, { Component } from 'react';
import '../css/login.css';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { bindActionCreators } from "redux";
import * as userActions from "../actionCreators/User";
import { connect } from "react-redux";

class Login extends Component {
    handleChangeLogin = (e) => {
        let login = {};
        let name = e.target.name;
        let value = e.target.value;
        login[name] = value;
        console.log(login)
        this.props.actions.userLogin(login);
    }

    handleLogin = (e) => {
       var email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (email.test(e.username)) {
            if (e.password.length < 5) {
                alert("Password needs to be atleast 5 characters long");
            }
            else{
            this.props.actions.userLoginCheck(e);
            }
        }
        else {
            alert("Invalid username,Please enter valid username,username must be a emailid")
        }
        
        console.log(e)
    }
    render() {

        return (
            <div onChange={(e) => {
                this.handleChangeLogin(e);
            }}>
                <div className="container">
                    <h1 className="margin-line">Login</h1>
                    <label ><b>Username</b></label>
                    <input type="text" onChange={(e) => { this.props.handleTextbox1(e) }} placeholder="Enter Username" name="username" >
                    </input>
                    <label ><b>Password</b></label>
                    <input type="password" onChange={(e) => { this.props.handleTextbox2(e) }} placeholder="Enter Password" name="password" ></input>
                    <button type="submit" className={this.props.finaldisplay ? "enableBtn" : "disableBtn"} onClick={() => {
                        this.handleLogin(this.props.login);
                    }}>Login</button>
                    <span className="message">{this.props.success.message}</span>
                    <Link to="/forget-password"><span className="psw">Forgot Password?</span></Link>
                </div>
            </div>
        )

    }
}
function mapStateToProps(state) {
    return {
        login: state.login,
        success: state.success,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    }

}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
