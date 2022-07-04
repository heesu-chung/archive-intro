import React, { Suspense, useRef } from "react";
import styled from "styled-components";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage } from "@react-three/drei";

const ModelWrapper = styled.div`
    width: 100%;
    position: relative;
    background: black;
    overflow: hidden;
    @media (min-width: 800px) {
        display: flex;
        flex-direction: row;
    }
`;

const ModelBlock = styled.div`
    width: 200%;
    @media (max-width: 800px) {
        margin-left: -50%;
    }
    @media (min-width: 800px) {
        width: 100%;
    }
`;

const Blank = styled.div`
    position: absolute;

    z-index: 10;
    top: 100px;
    width: 100%;
    height: 100px;
`;

const Blank1 = styled.div`
    position: absolute;
    z-index: 10;
    width: 35%;
    height: 200px;
`;
const Blank2 = styled.div`
    position: absolute;
    z-index: 10;
    width: 35%;
    left: 65%;
    height: 200px;
`;
function KodeKat1({ ...props }) {
    const group = useRef();
    const { nodes, materials } = useGLTF("/kodekat1.gltf");
    return (
        <group ref={group} {...props} dispose={null}>
            <group
                position={[0.21, -0.03, -0.28]}
                rotation={[0.3, -0.65, 0.19]}
                scale={[0.17, 0.16, 0.16]}
            >
                <mesh
                    geometry={nodes.Cylinder001.geometry}
                    material={materials["Material.001"]}
                />
                <mesh
                    geometry={nodes.Cylinder001_1.geometry}
                    material={materials["Material.003"]}
                />
            </group>
            <mesh
                geometry={nodes["4_Head007"].geometry}
                material={materials["Material.018"]}
                position={[-0.12, 1.77, 0.13]}
                rotation={[0.45, -0.62, 0.27]}
                scale={[1.05, 0.94, 0.9]}
            />
            <mesh
                geometry={nodes.Circle008.geometry}
                material={materials["Material.004"]}
                position={[-0.01, 1.15, -0.02]}
                rotation={[0.11, -0.67, 0.07]}
                scale={0.62}
            />
            <mesh
                geometry={nodes.Cube003.geometry}
                material={nodes.Cube003.material}
                position={[-0.57, 0.02, 0.73]}
                rotation={[0, -0.67, 0]}
                scale={[0.57, 0.01, 0.41]}
            />
            <mesh
                geometry={nodes.Cube004.geometry}
                material={materials["Material.007"]}
                position={[-0.89, 0.04, 0.47]}
                rotation={[-Math.PI, 0.67, -Math.PI]}
                scale={[0.03, 0, 0.01]}
            />
            <mesh
                geometry={nodes.Cube005.geometry}
                material={nodes.Cube005.material}
                position={[-0.96, 0.38, 1.22]}
                rotation={[-1.14, -0.32, -0.6]}
                scale={[0.57, 0.01, 0.41]}
            />
            <mesh
                geometry={nodes.Cube006.geometry}
                material={materials["Material.008"]}
                position={[-0.96, 0.38, 1.22]}
                rotation={[-1.14, -0.32, -0.6]}
                scale={[0.57, 0.01, 0.41]}
            />
        </group>
    );
}

const KodeKatModel = () => {
    return (
        <ModelWrapper>
            <Blank />
            <Blank1 />
            <Blank2 />
            <ModelBlock>
                <Canvas shadows camera={{ fov: 60 }}>
                    <Suspense fallback={null}>
                        <Stage>
                            <ambientLight />
                            <spotLight
                                intensity={0.9}
                                angle={0.3}
                                penumbra={1}
                                position={[180, 30, 10]}
                                castShadow
                            />
                            <KodeKat1 />
                            <OrbitControls
                                autoRotate={true}
                                autoRotateSpeed={5.0}
                                enableRotate={true}
                                enableZoom={false}
                            />
                        </Stage>
                    </Suspense>
                </Canvas>
            </ModelBlock>
        </ModelWrapper>
    );
};

export default KodeKatModel;
