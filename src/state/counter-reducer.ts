export type CounterActionsTypes = ReturnType<typeof setValueAC | typeof changeValueAC | typeof counterButtonsDisabledAC>

type initialStateType = typeof initialState

const initialState = {
  value: 0,
  isCounterButtonsDisabled: true
}

export const counterReducer = (state = initialState, action: CounterActionsTypes): initialStateType => {
  switch(action.type) {
    case 'SET_VALUE': 
      return {
        ...state, value: state.value + 1
      }
    case 'CHANGE_VALUE': 
      return {
        ...state, value: action.payload
      }
    case 'COUNTER_BUTTONS_DISABLED': 
      return {
        ...state, isCounterButtonsDisabled: action.payload
      }
    default:
      return state
  }
}

export const setValueAC = () => ({type: 'SET_VALUE'} as const)
export const changeValueAC = (payload: number) => ({type: 'CHANGE_VALUE', payload} as const)
export const counterButtonsDisabledAC = (payload: boolean) => ({type: 'COUNTER_BUTTONS_DISABLED', payload} as const)