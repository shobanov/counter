import { Container, Grid, Paper } from '@material-ui/core'
import React, { ChangeEvent } from 'react'
import { useState } from 'react'
import Counter from './Counter'
import SettingsCounter from './SettingsCounter'

function App() {

  let [count, setCount] = useState(0)
  let [maxValue, setMaxValue] = useState(500)
  let [startValue, setStartValue] = useState(0)
  let [isDisabled, setDisabled] = useState(false)
  let [isMistake, setMistake] = useState(false)

  const incValue = () => {
      setCount(++count)
  }

  const reset = () => {
    setCount(0)
  }

  const counterValue = () => {
    if (maxValue <= startValue || maxValue < 0 || startValue < 0) {
      setMistake(true)
      return "Incorrect value!"
    } else if (isDisabled) {
        return  count
    } else if (!isDisabled){
        setMistake(false)
        return "enter value and press \'set\'"
    }
  }

  const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(Number(e.target.value))
    setDisabled(false)
  }

  const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setStartValue(Number(e.target.value))
    setDisabled(false)
  }

  const setButtonHandler = () => {
     setCount(startValue)
     setDisabled(true)
  }


  return (
    <div>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <Paper elevation={3} style={{ padding: "15px" }}>
              <SettingsCounter
                maxValueHandler={maxValueHandler}
                startValueHandler={startValueHandler}
                setButtonHandler={setButtonHandler}
                isDisabled={isDisabled}
                isMistake={isMistake}
              />
            </Paper>
          </Grid>
          <Grid item>
            <Paper elevation={3} style={{ padding: "15px" }}>
              <Counter
                incValue={incValue}
                reset={reset}
                count={count}
                maxValue={maxValue}
                isDisabled={isDisabled}
                counterValue={counterValue}
                isMistake={isMistake}
              />
            </Paper>
          </Grid>
        </Grid>
    </div>
    
  );
}

export default App;

// const error = () => {
//   if (maxValue <= startValue || maxValue < 0 || startValue < 0) {
//     setMistake(true)
//   } 
//   else {
//     setMistake(false)
//   } 
// }