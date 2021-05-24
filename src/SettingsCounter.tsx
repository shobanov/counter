import { Button, Container, Paper, TextField } from '@material-ui/core'
import React, { ChangeEvent, FormEvent} from 'react'
//import './Counter.css'

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
      <Paper elevation={3}>
        <div className={'text-field'}>
          <TextField
            error={props.isMistake}
            id="outlined-basic"
            label="max value:"
            type="number"
            onChange={props.maxValueHandler}
          />
        </div>
        <div className={'text-field'}>
          <TextField
            error={props.isMistake}
            id="outlined-basic"
            label="start value:"
            type="number"
            onChange={props.startValueHandler}
          />
        </div>
      </Paper>
      <div>
        <Paper elevation={3} className={"button-block"}>
          <Button
            variant="contained"
            color="primary" 
            onClick={props.setButtonHandler}
            disabled={props.isDisabled}>
            set
          </Button>
        </Paper>
      </div>
    </div>
  )
}

export default SettingsCounter


