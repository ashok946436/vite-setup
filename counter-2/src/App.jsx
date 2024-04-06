import { useState } from 'react'; 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setCounter] = useState(12);
  //  let counter = 14;
  
  


  const addvalue = () => {
    if(counter <= 19){
      setCounter(counter +1 )
    }
  };
    const removevalue = () => {
      if(counter >= 1){
        setCounter(counter - 1)
      }
    }
  return (
    <>
      <h1>counter count</h1>
      <h3>counter value :- {counter}</h3>
      <button onClick={addvalue}>add value: {counter} </button>
      <br />
      <button onClick={removevalue}>remove value: {counter} </button>
    </>
  )
}

export default App
