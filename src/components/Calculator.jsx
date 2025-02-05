import Button from "./Buttons"
import "../components/calculator.style.css"
import { useReducer } from "react"
import { reducer, ACTIONS } from "./Reducer"

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, {
    currentInput: "",
    previousInput: "",
    operation: "",
  })

  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]

  return (
    <div className="calculator">
      <div className="display">
        {state.currentInput || state.operation || "0"}
      </div>
      <div className="button-grid">
        {numbers.map((num) => (
          <Button
            key={num}
            label={num}
            onClick={() =>
              dispatch({ type: ACTIONS.ADD_NUMBER, payload: num.toString() })
            }
          />
        ))}
        <Button
          label="+"
          onClick={() =>
            dispatch({ type: ACTIONS.SET_OPERATION, payload: "+" })
          }
        />
        <Button
          label="-"
          onClick={() =>
            dispatch({ type: ACTIONS.SET_OPERATION, payload: "-" })
          }
        />
        <Button
          label="*"
          onClick={() =>
            dispatch({ type: ACTIONS.SET_OPERATION, payload: "*" })
          }
        />
        <Button
          label="="
          className="equal"
          onClick={() => dispatch({ type: ACTIONS.CALCULATE })}
        />
        <Button
          label="Reset"
          className="reset"
          onClick={() => dispatch({ type: ACTIONS.RESET })}
        />
      </div>
    </div>
  )
}

export default Calculator
