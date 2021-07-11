import { Button, Paper, Typography } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { changeValueAC, counterButtonsDisabledAC, setValueAC } from "./state/counter-reducer"
import { changeMaxAC, changeMinAC, setButtonDisabledAC } from "./state/settings-reducer"
import s from './Counter.module.css'


function Counter () {

  const dispatch = useDispatch()

  const value = useSelector((state: any) => state.counter.value)
  const max = useSelector((state: any) => state.settings.max)
  const isCounterButtonsDisabled = useSelector((state: any) => state.counter.isCounterButtonsDisabled)
  const hasError = useSelector((state: any) => state.settings.hasError)
  const message = useSelector((state: any) => state.settings.message)
  
  const incHandler = () => {
    dispatch(setValueAC())
  }

  const reset = () => {
    dispatch(changeValueAC(0))
    dispatch(changeMaxAC(0))
    dispatch(changeMinAC(0))
    dispatch(setButtonDisabledAC(false))
    dispatch(counterButtonsDisabledAC(true))
  }
  
  const isValueEqualMax = value === max
  const EqualMessage = "value is equal max"

  return (
    <div>
      <Paper elevation={3} className={s.textFieldCounter}>
        <Typography
          className={s.message}
          variant="h5"
          align="center"
        >
          {value}
        </Typography>
        {
          <Typography
            
            variant="subtitle1"
            color={hasError ? 'error' : 'primary'}
            align="center"
          >
            {isValueEqualMax ? EqualMessage : message}
          </Typography>
        }

      </Paper>
      <Paper elevation={3} className={s.buttonBlock}>
        <Button
          variant="contained"
          color="primary"
          onClick={incHandler}
          disabled={isCounterButtonsDisabled || isValueEqualMax}
        >
          Inc
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={reset}
          disabled={isCounterButtonsDisabled}
        >
          Reset
        </Button>
      </Paper>
    </div>
  )
}

export default Counter