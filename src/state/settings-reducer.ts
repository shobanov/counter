export type SettingsActionsTypes = ReturnType<typeof changeMaxAC | typeof changeMinAC | typeof setButtonDisabledAC | typeof hasErrorAC>

type initialStateType = typeof initialState

const initialState = {
  max: 0,
  min: 0,
  setButtonDisabled: false,
  message: "enter values and press \'set\'",
  hasError: false
}

const isMistake = (min: number, max: number) => {
  if (max <= min || max < 0 || min < 0) {
    return {
      hasError: true,
      message: "please enter correct values"
    }
  }
  return {
    hasError: false,
    message: "enter values and press \'set\'"
  }
}

export const settingsReducer = (state = initialState, action: SettingsActionsTypes): initialStateType => {
  switch(action.type) {
    case 'CHANGE_MAX': 
      return {
        ...state, 
        max: action.payload,
        ...isMistake(state.min, action.payload),
      }
    case 'CHANGE_MIN': 
      return {
        ...state, 
        min: action.payload,
        ...isMistake(action.payload, state.max),
      }
    case 'SET_DISABLED':
      return {
        ...state, setButtonDisabled: action.payload
      }    
    default:
      return state
  }
}

export const changeMaxAC = (payload: number) => ({type: 'CHANGE_MAX', payload} as const)
export const changeMinAC = (payload: number) => ({type: 'CHANGE_MIN', payload} as const)
export const setButtonDisabledAC = (payload: boolean) => ({type: 'SET_DISABLED', payload} as const)
export const hasErrorAC = (payload: boolean) => ({type: 'SET_MISTAKE', payload} as const)