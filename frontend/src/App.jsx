import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/sidebar/sidebar'
import Dashboard from './components/dashboard/dashboard'

function App() {
  

  return (
    <>
    <div className="main">
      <Sidebar/>
      <Dashboard/>
    </div>
    </>
  )
}

export default App
