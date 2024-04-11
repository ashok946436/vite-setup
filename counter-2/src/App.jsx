import { useState } from 'react'; 
 
import './App.css'

function App() {
  let [counter , setCounter] = useState(12);
  //  let counter = 14;
  
  


  const addvalue = () => {
    if(counter <= 19){
      setCounter( prevCount => prevCount + 1)
      setCounter(prevCount => prevCount + 1 )
      setCounter(prevCount => prevCount + 1 )
      setCounter(prevCount => prevCount + 2 )
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
