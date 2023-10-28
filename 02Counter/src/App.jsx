import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 5

  let [counter, setCounter] = useState(5)

  const addValue = () => {
    console.log("Clicked",Math.random())
    //console.log("Value added", Math.random())
    if(counter<20)
      setCounter(++counter);
  }

  const removeValue = () => {
    //console.log("Clicked",Math.random())
    //console.log("Value added", Math.random())
    if(counter>0)
      setCounter(--counter);
  }

  return (
    <>
      <h1> Char aur React..!</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}> Add Value {counter}</button>
      <br></br>
      <button onClick={removeValue}> Remove Value {counter}</button>
    </>
  )
}

export default App
