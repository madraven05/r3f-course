import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const vertexShader = `
    varying vec3 worldNormal;
    void main() {
        worldNormal = normal;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`

const fragmentShader = `
    varying vec3 worldNormal;
    void main() {
        // (0 ,1, 0) -> (r, g, b)
        gl_FragColor = vec4(worldNormal, 1.0);
    }
`

const Lecture2 = () => {
  return (
    <div>
      <h1>Lecture 2</h1>
      <p>Understanding the rendering pipeline and basics of shader programming.</p>
      <div className="r3f-canvas">
        <Canvas>
          <ambientLight />
          <directionalLight position={[2, 2, 2]} />
          <mesh>
            <sphereGeometry args={[1, 25, 25]} />
            <shaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader}/>
          </mesh>
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
};

export default Lecture2;
