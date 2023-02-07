import { all, fork } from "redux-saga/effects";
import { myWatcher } from "./Calculator.Saga";

export default function* rootSaga() {
  yield all([fork(myWatcher)]);
}
