import { all } from "redux-saga/effects";
import vendorSaga from './vendors/vendorSagas';
export default function* RootSaga() {
  yield all([
    ...vendorSaga()
  ]);
}