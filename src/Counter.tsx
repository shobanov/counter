import { Button, Paper, TextField } from "@material-ui/core"
import s from './Counter.module.css'


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
      <Paper elevation={3} className={s.textFieldCounter}>
        <TextField
          className={s.inputCounter}
          helperText={isEqual() ? 'value is equal to the set max value' : ''}
          id="outlined-basic"
          error={isEqual() || props.isMistake}
          label={props.counterValue()}
          type="text" />
      </Paper>
      <Paper elevation={3} className={s.buttonBlock}>
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
  )
}

export default Counter