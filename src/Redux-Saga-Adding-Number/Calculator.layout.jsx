import { useState } from "react";
import { useSelector,  useDispatch } from "react-redux";
import { addNumbers } from "./Calculator.Slice";

const SagaCalcuator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const { result, isFetching } = useSelector((state) => state.calculator);
  const myDispatch = useDispatch();

  console.log({ result, isFetching });

  const onAddNumbers = () => {
    if (!num1 || !num2) {
      return alert("Please enter a valid numbers");
    }

    myDispatch(addNumbers({ num1, num2 }));
  };

  return (
    <div style={{textAlign:"center"}}>
      <h3>{isFetching ? "Please wait" : result}</h3>
      <div>
        <input
        style={{margin:"22px",padding:11}}
          type="number"
          value={num1}
          placeholder="Enter first number"
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
        style={{padding:11}}
          type="number"
          value={num2}
          placeholder="Enter second number"
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <div>
        <button onClick={onAddNumbers}>Add Number</button>
      </div>
    </div>
  );
};

export default SagaCalcuator;
