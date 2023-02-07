import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import SagaCalcuator from "./Redux-Saga-Adding-Number/Calculator.layout";
import { Provider } from "react-redux";
import { MyCalculatorReducerStore } from "./Redux-Saga-Adding-Number/Store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={MyCalculatorReducerStore}>
    <SagaCalcuator />
  </Provider>
);
