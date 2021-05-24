import { Button, makeStyles, Paper, TextField } from "@material-ui/core"
import React from "react"
import './Counter.css'


export type CounterPropsType = {
  incValue: () => void
  reset: () => void
  counterValue: () => string | number | readonly string[] | undefined
  count: number
  maxValue: number
  isDisabled: boolean
  isMistake: boolean
}

function Counter (props: CounterPropsType) {

  const isEqual = () => props.count === props.maxValue
  
  return (
    <div>
      <div className={'text-field'}>
        <TextField
          helperText={isEqual() ? 'value is equal to the set max value' : ''}
          id="outlined-basic"
          error={isEqual() || props.isMistake}
          label={props.counterValue()}
          type="text" />
      </div>
      <div>
        <Paper elevation={3} className={"button-block"}>
          <Button
            variant="contained"
            color="primary"
            onClick={props.incValue}
            disabled={isEqual() || !props.isDisabled || props.isMistake}>
            Inc
            </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={props.reset}
            disabled={!props.isDisabled || props.isMistake}>
            Reset
            </Button>
        </Paper>
      </div>
    </div >
  )
}

export default Counter

//props.isDisabled ? props.count : "enter value and press \'set\'"
//<input className={props.count === props.maxValue ? 'error' : ''} type="text" value={props.counterValue()}/>