import { useState } from 'react'
import Header from './components/Header'
import Body from './components/Body'
// import './App.css'

function App() {

  return (
    <>
    <div className=' bg-[#0f0f0f] fixed text-[#f1f1f1] right-0 left-0'>
    {/* <div className=' fixed left-0 right-0 '> */}
    <Header/>
    {/* </div> */}
      <Body/>
    </div>
    </>
  )
}

export default App
