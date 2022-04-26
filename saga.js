import { put, takeLatest } from "redux-saga/effects";
import { LOGIN, LOGIN_SUCCESS, RESET, RESET_SUCCESS } from "./actions";

function loading() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    })
}

function *HandleLogin({payload}) {
    if(payload.email === 'admin@gmail.com' && payload.pwd === 'letmein') {
        yield put({type: LOGIN_SUCCESS, payload: {isLoading: true, acceptLogin: true}});
        yield loading()
            /* .then((res) => {console.log(res)})
            .catch((err) => {console.log(err)}); */
        yield put({type: LOGIN_SUCCESS, payload: {isLoading: false, acceptLogin: true}});
    } else {
        yield alert('Email or Pwd is invalid!');
    }
}

function *HandleReset(payload) {
    yield put({type: RESET_SUCCESS, payload: payload});
}

export default function* rootSaga() {
    yield takeLatest(LOGIN, HandleLogin)
    yield takeLatest(RESET, HandleReset)
}