import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const Lecture1 = () => {
  return (
    <div>
      <h1>Lecture 1</h1>
      <p>
        Placing meshes in the scene. Working with materials, lighting and
        different geometries.
      </p>
      <div className="r3f-canvas">
        {/* Canvas */}
        <Canvas camera={{ position: [0, 0, 14] }}>
          {/* Lighting */}
          <ambientLight intensity={0.7} />
          <directionalLight position={[2, 2, 2]} />

          {/* Meshes */}
          <mesh rotation={[0, Math.PI / 4, Math.PI / 4]}>
            {/* geometries */}
            <boxGeometry args={[4, 4, 4]} />
            <meshStandardMaterial color={"green"} />
          </mesh>
          <mesh position={[6, 0, 0]}>
            <sphereGeometry args={[1, 10, 10]} />
            <meshStandardMaterial wireframe color="pink" />
          </mesh>
          <OrbitControls />
        </Canvas>
      </div>
      <hr style={{marginTop: "40px"}}/>
    </div>
  );
};

export default Lecture1;
