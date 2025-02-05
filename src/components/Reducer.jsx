export const ACTIONS = {
  ADD_NUMBER: "add-number",
  SET_OPERATION: "set-operation",
  CALCULATE: "calculate",
  RESET: "reset",
}

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_NUMBER:
      return {
        ...state,
        currentInput: state.currentInput + action.payload,
      }

    case ACTIONS.SET_OPERATION:
      if (!state.currentInput && !state.previousInput) {
        return state
      }

      return {
        ...state,
        previousInput: state.currentInput || state.previousInput,
        currentInput: "",
        operation: action.payload,
      }

    case ACTIONS.CALCULATE:
      if (state.previousInput === "" || state.currentInput === "") return state
      let result
      const prev = parseFloat(state.previousInput)
      const current = parseFloat(state.currentInput)

      switch (state.operation) {
        case "+":
          result = prev + current
          break
        case "-":
          result = prev - current
          break
        case "*":
          result = prev * current
          break
        default:
          return state
      }

      return {
        previousInput: "",
        currentInput: result.toString(),
        operation: "",
      }

    case ACTIONS.RESET:
      return {
        currentInput: "",
        previousInput: "",
        operation: "",
      }

    default:
      return state
  }
}
