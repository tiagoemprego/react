import client from "../Services/api";
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function getContentShow() {
    client.getEntries()
        .then((response) => {
            return response.items;
        }).catch(err => console.log(err));
}

function* fetchUser(action) {
    try {
        const user = yield call(getContentShow.fetchUser, action.payload.userId);
        yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    } catch (e) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* mySaga() {
    yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga()