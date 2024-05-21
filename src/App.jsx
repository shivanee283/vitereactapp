import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('#282c34')
  const [isBouncing, setIsBouncing] = useState(true)
  const [count, setCount] = useState(0)

  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
    setBgColor(randomColor)
  }

  const toggleBounce = () => {
    setIsBouncing(!isBouncing)
  }

  return (
    <div id="root" style={{ backgroundColor: bgColor }}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          see your count : {count}
        </button>
        <button onClick={generateRandomColor}>
          Change Background Color
        </button>
        <button onClick={toggleBounce}>
          Toggle Bouncing Ball
        </button>
        {isBouncing && <div className="bouncing-ball"></div>}
        
      </div>
    </div>
  )
}

export default App
