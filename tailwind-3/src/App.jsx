import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
       <h1 className='bg-green-400 text-orange-700 p-5 rounded-xl'>Tailwind CSS</h1>
       <Card username = "cards format" />
       <Card username=" second cards"/>
    </>
  )
}

export default App
