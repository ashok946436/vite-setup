import { useState } from 'react'
 
// import './App.css'

function App() {
  const [color, setColor] = useState("grey")

  return (
    
    <div className='w-100% h-screen'
      style={{backgroundColor: color}} >

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 ' 
          >
            <div className='flex flex-wrap justify-center gap-4 rounded-3xl p-5 bg-black'>

              <button className='outline-none bg-red-700 px-6 py-3 rounded-3xl text-white'
              onClick={() => setColor("red")} 
               style={{backgroundColor: "red"}}> Red</button>

              <button className='outline-none bg-green-700 px-6 py-3 rounded-3xl text-white'
              onClick={() => setColor("green")} 
              style={{backgroundColor: "green"}}> Green</button>

              <button className='outline-none bg-blue-700 px-6 py-3 rounded-3xl text-white'
              onClick={() => setColor("blue")} 
              style={{backgroundColor: "blue"}}> Blue</button>

              </div>         
        </div>
          
      </div>
       
  )
}

export default App
