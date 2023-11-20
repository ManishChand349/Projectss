import { useCallback, useState } from 'react'

import './App.css'

function App() {
  const [length, setLenght] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
 
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()-=_+[]{}|;:',.<>?/"

    for (let i = 1; i <= array.length; i++) {
     let char = Math.floor(Math.random() * str.length + 1)      
     pass = str.charAt(char)
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-50 bg-gray-500'>
      test
     </div>
    </>
  )
}

export default App
