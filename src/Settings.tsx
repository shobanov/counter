import { Button, Paper, TextField } from '@material-ui/core'
import { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeMaxAC, changeMinAC, setButtonDisabledAC } from './state/settings-reducer'
import { changeValueAC, counterButtonsDisabledAC } from './state/counter-reducer'
import s from './Counter.module.css'

function Settings() {

  const dispatch = useDispatch()

  const max = useSelector((state: any) => state.settings.max)
  const min = useSelector((state: any) => state.settings.min)
  const setButtonDisabled = useSelector((state: any) => state.settings.setButtonDisabled)
  const hasError = useSelector((state: any) => state.settings.hasError)

  const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeMaxAC(Number(e.target.value)))
  }

  const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeMinAC(Number(e.target.value)))
  }

  const setButtonHandler = () => {
    dispatch(changeValueAC(min))
    dispatch(counterButtonsDisabledAC(false))
    dispatch(setButtonDisabledAC(true))
  }

  return (
    <div>
      <Paper elevation={3} className={s.textField}>
        <TextField
          id="outlined-basic"
          label="max value:"
          type="number"
          onChange={maxValueHandler}
          value={max}
          error={hasError}
        />
        <TextField
          id="outlined-basic"
          label="start value:"
          type="number"
          onChange={minValueHandler}
          value={min}
          error={hasError}
        />
      </Paper>
      <Paper elevation={3} className={s.buttonBlock}>
        <Button
          variant="contained"
          color="primary"
          disabled={setButtonDisabled || hasError? true : false}
          onClick={setButtonHandler}
        >
          set
        </Button>
      </Paper>
    </div>
  )
}

export default Settings
