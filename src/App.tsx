import { Paper } from '@material-ui/core'
import Counter from './Counter'
import Settings from './Settings'
import s from './Counter.module.css'

function App() {
  
  return (
    <div className={s.main}>
        <Paper elevation={3} className={s.settings}>
          <Settings />
        </Paper>
        <Paper elevation={3} className={s.counter}>
          <Counter />
        </Paper>
    </div>
  )
}

export default App
