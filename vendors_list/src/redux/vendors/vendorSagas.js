import {
    put,
    takeLatest,
    call,
} from "redux-saga/effects";

import {
    LOAD_VENDORS_LIST,
    LOAD_VENDORS_LIST_SUCCESS,
    LOAD_VENDORS_LIST_FAILURE
} from './vendorActionTypes'

import { getVendorsList } from "../../api/Srvc/vendorSrvc";

function* loadVendorsList(action) {
    console.log('reeeerrrssss', action);
    try {
        const res = yield call(() => getVendorsList(action.data), action.data);
        console.log('reeeerrrssss', res);
        yield put({
            type: LOAD_VENDORS_LIST_SUCCESS,
            data: { payload: res.data }
        });
    } catch (error) {
        yield put({
            type: LOAD_VENDORS_LIST_FAILURE,
            error: error
        });
    }
}
function* loadVendorsListWatcher() {
    yield takeLatest(LOAD_VENDORS_LIST, loadVendorsList);
}

export default function () {
    return [
        loadVendorsListWatcher(),
    ];
}
