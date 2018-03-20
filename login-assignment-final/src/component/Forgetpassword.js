import React, { Component } from 'react';
import '../css/forgetpassword.css';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { bindActionCreators } from "redux";
import * as userActions from "../actionCreators/User";
import { connect } from "react-redux";


class ForgetPassword extends Component {
    handleChangeEmail = (e) => {
        let email = {};
        let name = e.target.name;
        let value = e.target.value;
        email[name] = value;
        this.props.actions.resetPassword(email);
    }
    handleEmail = (e) => {
        console.log("email", e)
        this.props.actions.passwordChange(e);
    }
    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="margin-line">Forgot Password</h1>
                    <label><b>Enter your account email id</b></label>
                    <input type="text" placeholder="Enter your account email id" name="email" onChange={(e) => {
                        this.handleChangeEmail(e);
                    }}></input>
                    <button type="submit" onClick={() => {
                        this.handleEmail(this.props.email);
                    }}>Reset Password</button>
                    {/* <span className="message">{this.props.token.message}</span> */}
                    <Link to="/"> <span className="psw">Back to login</span></Link>
                </div>
            </div>
        )

    }
}
function mapStateToProps(state) {
    return {
        email: state.email,
        token: state.token,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    }

}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ForgetPassword));
