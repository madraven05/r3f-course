import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const Lecture1 = () => {
  return (
    <div>
        {/* Canvas */}
      <Canvas camera={{ position: [0,0,5]}}>
        {/* Lighting */}
        <ambientLight intensity={0.7}/> 
        <directionalLight position={[2,2,2]}/>

        {/* Meshes */}
        <mesh rotation={[0,Math.PI/4,Math.PI/4]}>
          {/* geometries */}
          <boxGeometry args={[4,4,4]}/>
          <meshStandardMaterial color={"green"}/>
        </mesh>
        <mesh position={[3,0,0]}>
          <sphereGeometry args={[1,20,20]}/>
          <meshStandardMaterial color="pink"/>
        </mesh>
        <OrbitControls/>
      </Canvas>
    </div>
  )
}

export default Lecture1