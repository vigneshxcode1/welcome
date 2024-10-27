import { useState } from 'react'
import img1 from '../src/img.jpg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={img1} alt="" />

      <h1>COMING SOON...</h1>
    </>
  )
}

export default App
