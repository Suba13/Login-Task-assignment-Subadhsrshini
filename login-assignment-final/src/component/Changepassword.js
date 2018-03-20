import React, { Component } from 'react';
import '../css/changepassword.css';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { bindActionCreators } from "redux";
import * as userActions from "../actionCreators/User";
import { connect } from "react-redux";



class ChangePassword extends Component {
    passwordChange = (e) => {
        let newpassword = {};
        let name = e.target.name;
        let value = e.target.value;
        newpassword[name] = value;
        console.log("password", newpassword)
        this.props.actions.newPassword(newpassword);
    }
    passwordChangeClick = (token, e) => {
        console.log(e)
        let password = e.confirmpassword;
        if (e.newpassword !== e.confirmpassword) {
            alert("Passwords Don't Match");
        } else {
            if (password.length < 5) {
                alert("Password needs to be atleast 5 characters long");
            }
            else {
                let data = { token, password }
                console.log("data", data)
                this.props.actions.newPasswordSubmit(data);
            }
        }
    }
    render() {
        console.log(this.props.match.params.id)
        return (
            <div onChange={(e) => {
                this.passwordChange(e);
            }}>
                <div className="container">

                    <h1 className="margin-line">Change Password</h1>
                    <label><b>Enter your New Password</b></label>
                    <input type="text" placeholder="Enter your new password" name="newpassword" onChange={(e) => { this.props.handleTextbox1(e) }} ></input>
                    <label><b>Enter your Confirm Password</b></label>
                    <input type="password" placeholder="Reenter your new password" name="confirmpassword" onChange={(e) => { this.props.handleTextbox2(e) }}></input>
                    <button type="submit" className={this.props.finaldisplay ? "enableBtn" : "disableBtn"} onClick={() => {
                        this.passwordChangeClick(this.props.match.params.id, this.props.newpassword);
                    }}>Submit</button>
                    <span className="message">{this.props.passwordsuccess.message}</span>
                    <Link to="/"> <span className="psw">Back to login</span></Link>
                </div>
            </div>
        )

    }
}
function mapStateToProps(state) {
    return {
        newpassword: state.newpassword,
        passwordsuccess: state.passwordsuccess,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    }

}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChangePassword));
