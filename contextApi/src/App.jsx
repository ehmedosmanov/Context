import { useState } from 'react'
import './App.css'
import CounterContextProvider from './contexts/Counter/CounterContextProvider'
import Home from './pages/Home'

function App() {

  return (
    <>
     <CounterContextProvider>
     <Home/>
     </CounterContextProvider>
    </>
  )
}

export default App
