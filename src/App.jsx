import { useState } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './utils/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainContainer from './components/MainContainer'
// import './App.css'

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      }
    ]
  }
])

function App() {

  return (
    <>
    <Provider store={store}>

    <div className=' bg-[#0f0f0f] fixed text-[#f1f1f1] right-0 left-0'>
      <Header/>
 <RouterProvider router={appRouter}/>
    </div>
    </Provider>
    </>
  )
}

export default App
