import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10);  // Initial counter value = 10

  const decreaseValue = () => {
    if (counter > 0) {
      setCounter(prevCounter => prevCounter - 1);
    }
  };

  const increase = () => {
    if (counter < 20) {
      setCounter(prevCounter => prevCounter + 1);
    }
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={increase}>Increase Value</button>
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  );
}

export default App;
