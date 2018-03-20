import React, { Component } from 'react';
import '../css/forgetpassword.css';
import { Link } from 'react-router-dom';



class ForgetPassword extends Component {
    render() {
        console.log("token",this.props.token)
        return (
            <div>
                <div className="container">
                    <h1 className="margin-line">Forgot Password</h1>
                    <label><b>Enter your account email id</b></label>
                    <input type="text" placeholder="Enter your account email id" name="email"onChange={(e) => {
                this.props.handleChangeEmail(e);
            }}></input>
               <button type="submit" onClick={() => {
                        this.props.handleEmail(this.props.email);
                    }}>Reset Password</button>
                    <span className="message">{this.props.message}</span>
                    <Link to="/"> <span className="psw">Back to login</span></Link>
                </div>
         </div>
        )

    }
}
export default ForgetPassword;