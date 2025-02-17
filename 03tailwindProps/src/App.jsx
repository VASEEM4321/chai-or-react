import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './compnents/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-300 p-4 rounded-xl'>hello Props with chai</h1>
      <Card username="responsive_componenets12.99" />
      <Card name="components" />
      <Card />

    </>
  )
}

export default App
