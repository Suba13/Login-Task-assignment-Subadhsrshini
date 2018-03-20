import React, { Component } from 'react';
import '../css/login.css';
import { Link } from 'react-router-dom';

class Login extends Component {

    render() {

        return (
            <div onChange={(e) => {
                this.props.handleChangeLogin(e);
            }}>
                <div className="container">
                    <h1 className="margin-line">Login</h1>
                    <label ><b>Username</b></label>
                    <input type="text" onChange={(e) => { this.props.handleTextbox1(e) }} placeholder="Enter Username" name="username" >
                    </input>
                    <label ><b>Password</b></label>
                    <input type="password" onChange={(e) => { this.props.handleTextbox2(e) }} placeholder="Enter Password" name="password" ></input>
                    <button type="submit" className={this.props.finaldisplay ? "enableBtn" : "disableBtn"} onClick={() => {
                        this.props.handleLogin(this.props.login);
                    }}>Login</button>
                    <span className="message">{this.props.message}</span>
                    <Link to="/forget-password"><span className="psw">Forgot Password?</span></Link>
                </div>
            </div>
        )

    }
}
export default Login;