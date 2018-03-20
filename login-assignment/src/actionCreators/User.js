import {
    USERLOGIN,RESETPASSWORD,
    USERDATA,USERDATASUCCESS,
    USERDATAFAILURE,USERLOGINCHECK,
    LOGINSUCCESS,LOGINFAILURE,
    PASSWORDCHANGE,PASSWORDCHANGESUCCESS,
    PASSWORDCHANGEFAILURE,NEWPASSWORD,
    NEWPASSWORDSUBMIT,NEWPASSWORDSUCCESS,
    NEWPASSWORDFAILURE,BUTTON,BUTTONFINAL
  } from "../actionTypes/User";
  
  export function userData() {
    return {
      type: USERDATA
     
    };
  }
  export function userDataSuccess(users) {
    return {
      type: USERDATASUCCESS,
     users
    };
  }
  export function userDataFailure(error) {
    return {
      type: USERDATAFAILURE,
     error
    };
  }
  export function userLogin(login) {
    return {
      type: USERLOGIN,
      login
    };
  }
  export function userLoginCheck(login) {
    return {
      type: USERLOGINCHECK,
      login
    };
  }
  export function loginSuccess(success) {
    return {
      type: LOGINSUCCESS,
      success
    };
  }
  export function loginFailure(error) {
    return {
      type: LOGINFAILURE,
      error
    };
  }
  export function resetPassword(emailId) {
    return {
      type: RESETPASSWORD,
      emailId
    };
  }
  export function passwordChange(email) {
    return {
      type: PASSWORDCHANGE,
      email
    };
  }
  export function passwordChangeSuccess(token) {
    return {
      type: PASSWORDCHANGESUCCESS,
      token
    };
  }
  export function passwordChangeFailure(error) {
    return {
      type: PASSWORDCHANGEFAILURE,
      error
    };
  }
  export function newPassword(password) {
    return {
      type: NEWPASSWORD,
      password
    };
  }
  export function newPasswordSubmit(password) {
    return {
      type: NEWPASSWORDSUBMIT,
      password
    };
  }
  export function newPasswordSuccess(successmessage) {
    return {
      type: NEWPASSWORDSUCCESS,
      successmessage
    };
  }
  export function newPasswordFailure(error) {
    return {
      type: NEWPASSWORDFAILURE,
      error
    };
  }
  export function button(value) {
    return {
      type: BUTTON,
      value
    };
  }
  
  export function buttonFinal(value) {
    return {
      type: BUTTONFINAL,
      value
    };
  }
  
  