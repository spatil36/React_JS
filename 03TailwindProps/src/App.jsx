import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 mb-4'>TAILWIND CSS</h1>
    <Card username="Shubham" btnTxt="Click Me"/>
    <Card username="Salman" btnTxt="Visit Me"/>

    </>
  )
}

export default App
