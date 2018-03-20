import {
    USERLOGIN,RESETPASSWORD,USERDATA,USERDATASUCCESS,LOGINSUCCESS,PASSWORDCHANGESUCCESS,NEWPASSWORD,NEWPASSWORDSUCCESS,BUTTON,BUTTONFINAL
  } from "../actionTypes/User";
  export default (
    prevstate = {users:[],
      login:{},email:{},
      success:{},token:{},
      newpassword:{},passwordsuccess:{},display:0,finaldisplay:0
    },
    action
  ) => {
    switch (action.type) {
      case USERDATA:
        return {
          ...prevstate,
       
        }
        case USERDATASUCCESS:
        return {
          ...prevstate,
                users: action.users
        }
      case USERLOGIN:
        return {
          ...prevstate,
          login: { ...prevstate.login, ...action.login }
        }
        case LOGINSUCCESS:
        return {
          ...prevstate,
          success: { ...prevstate.success, ...action.success }
        }
        case RESETPASSWORD:
        return {
          email: { ...prevstate.email, ...action.emailId }
        
        }
        case PASSWORDCHANGESUCCESS:
        return {
         
          token: { ...prevstate.token, ...action.token }
        }
        case NEWPASSWORD:
        return {
          ...prevstate,
          newpassword: { ...prevstate.newpassword, ...action.password }
        }
        case NEWPASSWORDSUCCESS:
        return {
          ...prevstate,
          passwordsuccess: { ...prevstate.passwordsuccess, ...action.successmessage }
        }
        case BUTTON:
        return {
          ...prevstate,
         display:action.value
        }
        case BUTTONFINAL:
        return {
          ...prevstate,
          finaldisplay:action.value
        }
        default:
      return prevstate;
    }
}