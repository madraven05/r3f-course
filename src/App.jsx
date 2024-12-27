import { Canvas } from '@react-three/fiber'
import './App.css'
import { OrbitControls } from '@react-three/drei'
import Lecture1 from './lectures/Lecture1'
import Lecture2 from './lectures/Lecture2'
import Lecture3 from './lectures/Lecture3'

function App() {
  return (
    <div className='lectures-container'>
      <Lecture1/>
      <Lecture2/>
      <Lecture3/>
    </div>
  )
}

export default App
