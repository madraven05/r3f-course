import { Canvas } from '@react-three/fiber'
import './App.css'
import { OrbitControls } from '@react-three/drei'
import Lecture1 from './lectures/Lecture1'
import Lecture2 from './lectures/Lecture2'

function App() {
  return (
    <div className='lectures-container'>
      <Lecture1/>
      <Lecture2/>
    </div>
  )
}

export default App
