import { Button, Paper, TextField } from '@material-ui/core'
import { ChangeEvent} from 'react'
import s from './Counter.module.css'

export type SettingsCounterPropsType = {
  maxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
  startValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
  setButtonHandler: () => void
  isDisabled: boolean
  isMistake: boolean
}

function SettingsCounter(props: SettingsCounterPropsType) {

  return (
    <div>
      <Paper elevation={3} className={s.textField}>
        <TextField
          error={props.isMistake}
          id="outlined-basic"
          label="max value:"
          type="number"
          onChange={props.maxValueHandler}
        />
        <TextField
          error={props.isMistake}
          id="outlined-basic"
          label="start value:"
          type="number"
          onChange={props.startValueHandler}
        />
      </Paper>
      <Paper elevation={3} className={s.buttonBlock}>
        <Button
          variant="contained"
          color="primary"
          onClick={props.setButtonHandler}
          disabled={props.isDisabled}>
          set
          </Button>
      </Paper>
    </div>
  )
}

export default SettingsCounter


