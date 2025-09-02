import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <h1 className='bg-yellow-200 text-green-500 p-4 m-4 rounded-4xl'>react router</h1>
   
   </>
  )
}

export default App
