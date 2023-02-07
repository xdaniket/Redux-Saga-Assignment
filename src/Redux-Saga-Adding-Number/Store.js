import { configureStore } from "@reduxjs/toolkit";
import CalculatorSlice from "./Calculator.Slice";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./Root-Saga";

const sagaMiddleware = createSagaMiddleware();

export const MyCalculatorReducerStore = configureStore({
  reducer: {
    calculator: CalculatorSlice,
  },
  middleware: (currentMiddleware) => [
    ...currentMiddleware({ thunk: false }),
    sagaMiddleware,
  ],
});
sagaMiddleware.run(rootSaga);
