import { Paper } from '@material-ui/core'
import { ChangeEvent } from 'react'
import { useState } from 'react'
import Counter from './Counter'
import SettingsCounter from './SettingsCounter'
import s from './Counter.module.css'

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
    <div className={s.main}>
        <Paper elevation={3} className={s.settings}>
          <SettingsCounter
            maxValueHandler={maxValueHandler}
            startValueHandler={startValueHandler}
            setButtonHandler={setButtonHandler}
            isDisabled={isDisabled}
            isMistake={isMistake}
          />
        </Paper>
        <Paper elevation={3} className={s.counter}>
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
    </div>
  )
}

export default App