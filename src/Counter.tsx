import React, { useState } from 'react'
import './Counter.css';

export function Counter() {

  let [count, setCount] = useState(0);

  const incValue = () => {
    setCount(++count)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div className='parent-box'>
      <div className='counter'>
        <div className='input-box'>
          <input className={count===5 ? 'error' : 'input'} type="text" value={count}/>
        </div>
        <div className='button-box'>
          <button className='button' onClick={incValue} disabled={count===5}>Inc</button>
          <button className='button' onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Counter