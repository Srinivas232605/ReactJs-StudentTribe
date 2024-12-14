import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect( ()=>{
    console.log("useEffect like Class Component lifeCycle ComponenDidUpdate")
  }

  )

  return (
    <>
      <p> useEffectHook1 : clicked {count} time</p>
      <button onClick={()=>setCount(count+1)}>Clicked me</button>
    </>
  )
}

export default App
