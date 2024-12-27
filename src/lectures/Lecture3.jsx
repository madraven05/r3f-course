import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import { BackSide, DoubleSide } from "three";

const Lecture3 = () => {
  const meshRef = useRef(null); // the current clicked mesh
  
  const handleOnClick = (event) => {
    console.log(event.object);
    meshRef.current = event.object; // assigning the clicked mesh to the mesh reference
  };

  const rotateObject = () => {
    if(meshRef.current) {
        meshRef.current.rotation.set(0,Math.PI/4,0);
    } else {
        console.log("No object was clicked!");
    }
  }

  const handlePointerOver = (event) => {
    event.stopPropagation();
    // console.log(event.intersections);
  };
  return (
    <div>
      <h1>Lecture 3</h1>
      <p>
        Understanding the rendering pipeline and basics of shader programming.
      </p>
      <button onClick={rotateObject}>Rotate</button>

      <div className="r3f-canvas">
        <Canvas camera={{ position: [14, 14, 14] }}>
          {/* Lighting */}
          <ambientLight intensity={0.7} />
          <directionalLight position={[2, 2, 2]} />

          {/* Assignment 01 */}
          {/* 1. Create a plane */}
          <mesh
            onPointerOver={handlePointerOver}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <planeGeometry args={[25, 25]} />
            <meshStandardMaterial side={BackSide} color={"white"} />
          </mesh>

          {/* blue box */}
          <mesh
            onPointerOver={handlePointerOver}
            onClick={handleOnClick}
            position={[0, 1, 0]}
          >
            <boxGeometry args={[4, 4, 4]} />
            <meshStandardMaterial color={"royalblue"} />
          </mesh>
          {/* teal box */}
          <mesh onClick={handleOnClick} position={[5, 2.5, 6]}>
            <boxGeometry args={[1, 1, 5]} />
            <meshStandardMaterial color={"teal"} />
          </mesh>
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
};

export default Lecture3;
