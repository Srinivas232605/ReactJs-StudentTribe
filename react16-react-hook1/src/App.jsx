import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import StateHook2 from './StateHook2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <p>Button Clicked {count}times:Ram</p>
    <button onClick={() => setCount(count+1)}>Click me</button> */}
    <StateHook2/>

    </>
  )
}

export default App
