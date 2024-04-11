import { useState , useCallback , useEffect , useRef} from 'react'
 
 
function App() {
   const [length , setLength] = useState(8)
   const [numberAllowed , setnumberAllowed] = useState(false)
   const [charAllowed , setcharAllowed] = useState(false)
   const [password , setPassword] = useState("")

   // useRef hook

   const passwordRef = useRef(null)

   const passwordGenerate = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()?~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }
    setPassword(pass)


   } , [length , numberAllowed, 
  charAllowed , setPassword])

  const copypasswordinput = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  } , [password])

  useEffect(() => {
    passwordGenerate()
  }, [length, numberAllowed, charAllowed, passwordGenerate] )
  return (
    <>
     <div className='w-full max-w-md mx-auto bg-gray-700 p-5 mt-6 rounded-lg text-orange-600'>
      <h1 className='text-white mb-2 text-center'>Password generate</h1>
      <div className='flex items-center shadow rounded-lg mb-4 overflow-hidden'>
        <input 
          type="text"
          value={password}
          min={8}
          max={100} 
          placeholder='password'
          className='outline-none px-4 py-2 w-full'
          ref={passwordRef}
        />
        <button
        onClick={copypasswordinput}
        className='bg-blue-700 hover:bg-blue-400 text-white px-4 py-2 rounded-r-lg'>copy</button>
      </div>
       <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1'>
          <input 
            type="range"
            value={length} 
            min={8}
            max={100}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
          />
          <label > Length : ({length})</label>

        </div>
        <div className='flex item-center gap-x-1'>
          <input 
           type="checkbox"
           defaultChecked = {numberAllowed} 
           id="numberInput" 
           onChange={() => {setnumberAllowed ((prev) => !prev);
          }}
          />
          <label > Numbers : {numberAllowed}</label>
        </div>

        <div className='flex item-center gap-x-1'>
          <input 
           type="checkbox"
           defaultChecked = {charAllowed} 
           id="charInput" 
           onChange={() => {setcharAllowed ((prev) => !prev);
          }}
          />
          <label > Characters: {charAllowed}</label>
        </div>

       </div>

     </div>
    </>
  )
}

export default App
