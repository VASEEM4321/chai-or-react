import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 //let counter = 10;
 
 let [counter, setCounter] = useState(10)

 const decreaseValuse = () => {
  setCounter(counter - 1);
 }

 const increase = () => {
  setCounter(counter + 1);
 }

  return (
    <>
     <h1>chai aur react</h1>
     <h2>counter value: {counter}</h2>
     <button
     onClick={increase}
     >increase value</button>
     <button
     onClick={decreaseValuse} 
     >Decrease value</button>
    </>
  )
}

export default App
