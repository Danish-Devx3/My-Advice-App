import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [advice, setAdvice] = useState('')
  const [isLoading, setIsLoding] = useState('')
  const [btnS, setBtnS] = useState('')
  useEffect(() => {
    fetchAdvice()
  })

  var fetchAdvice = async ()=>{
    
    let responce = await fetch('https://api.adviceslip.com/advice');
    let data = await responce.json()
    setAdvice(data.slip.advice)
    
  }
  

  return (
   <>
   <div className="flex justify-center items-center h-[100vh] bg-[url('./assets/home.png')] ">
    <div className="sm: w-[300px] sm:h-4 flex sm: gap-2 gap-9 flex-col items-center justify-center text-center isolate aspect-video w-[35%] rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5">
      <p className='font-semibold text-3xl w-[80%]'>{advice}</p>
      <button onClick={()=>{fetchAdvice()}} type="button" class=" py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 active:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:hover:bg-blue-900 dark:focus:bg-blue-900 dark:active:bg-blue-900">
      See More Advice
      </button>
    </div>
   </div>
   </>
  )
}

export default App
