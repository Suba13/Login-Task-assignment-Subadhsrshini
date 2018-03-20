import { userDataSuccess, userDataFailure,loginSuccess,loginFailure,passwordChangeSuccess,passwordChangeFailure,newPasswordSuccess,newPasswordFailure} from "../actionCreators/User"
import { USERDATA,USERLOGINCHECK,PASSWORDCHANGE,NEWPASSWORDSUBMIT} from "../actionTypes/User"
import { put, takeLatest } from "redux-saga/effects";

var url = "http://10.100.110.132:4000/users/"
function* userData() {
    
    try {

        let users = yield fetch(url).then(result => result.json());

        yield put(userDataSuccess(users));
    }
    catch (error) {
        yield put(userDataFailure(error));
    }
}
function* userLoginCheck(action) {
    console.log("saga",action.login)
    try {
        let success = yield fetch(`${url}login`, {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(action.login)
        }).then(result => result.json());
        yield put(loginSuccess(success));
    }
    catch (error) {
        yield put(loginFailure(error));
    }
}
function* passwordChange(action) {
    console.log("saga",action.email)
    try {
        let token = yield fetch(`${url}forget`, {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(action.email)
        }).then(result => result.json());
        yield put(passwordChangeSuccess(token));
    }
    catch (error) {
        yield put(passwordChangeFailure(error));
    }
}
function* newPasswordSubmit(action) {
    console.log("saga",action.password)
    try {
        let successmessage = yield fetch(`${url}reset`, {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(action.password)
        }).then(result => result.json());
        yield put(newPasswordSuccess(successmessage));
    }
    catch (error) {
        yield put(newPasswordFailure(error));
    }
}
export function* getWatcher() {
    yield [takeLatest(USERDATA, userData),
        takeLatest(USERLOGINCHECK, userLoginCheck),
        takeLatest(PASSWORDCHANGE, passwordChange),
        takeLatest(NEWPASSWORDSUBMIT, newPasswordSubmit)];
}