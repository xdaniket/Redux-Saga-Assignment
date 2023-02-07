import { delay, put, takeLatest } from "redux-saga/effects";
import { addNumbersSuccess } from "./Calculator.Slice";

function* onAddNumber(actions) {
  try {
    const result = +actions.payload.num1 + +actions.payload.num2;
    console.log({ result });

    yield delay(2000);
    yield put(addNumbersSuccess(result));
  } catch (err) {
  }
}

export function* myWatcher() {
  yield takeLatest("My Calculator/addNumbers", onAddNumber);
}
