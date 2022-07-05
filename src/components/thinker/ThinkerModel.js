import React, { useRef, Suspense } from "react";
import styled, { css } from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage } from "@react-three/drei";
import { locState } from "../../App";
import { useRecoilValue } from "recoil";

const ModelWrapper = styled.div`
    width: 100%;
    height: 300px;
    position: relative;
    top: 100px;
    padding-top: -100px;
    overflow: hidden;

    @media (min-width: 800px) {
        margin-top: -50px;
    }
`;
const ContentBlock = styled.div`
    width: 150%;
    height: 300px;

    @media (max-width: 800px) {
        ${(props) =>
            props.loc < 2300 &&
            props.loc > 4300 &&
            css`
                display: none;
            `}
    }

    @media (min-width: 800px) {
        height: 600px;
        ${(props) =>
            props.loc < 6500 &&
            props.loc > 8500 &&
            css`
                display: none;
            `}
    }
`;

const Desc = styled.p`
    position: absolute;
    padding: 30px 0;
    font-size: 80px;
    font-weight: 700;

    background: linear-gradient(to right, #f6c366, #d62e6e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    left: 12%;
    top: -40px;

    @media (min-width: 800px) {
        left: 43%;
    }
`;

const Blank1 = styled.div`
    position: absolute;
    background: white;
    width: 100%;
    top: 170px;
    height: 130px;
    z-index: 7;
    opacity: 0;

    @media (min-width: 800px) {
        display: none;
    }
`;
const Blank2 = styled.div`
    position: absolute;
    background: white;
    width: 60%;
    top: 0px;
    height: 300px;
    z-index: 7;
    opacity: 0;
`;

function Model({ ...props }) {
    const group = useRef();

    const { nodes, materials } = useGLTF("/model.gltf");
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh
                geometry={nodes["4_Body003"].geometry}
                material={materials["Material.024"]}
                position={[-0.34, -0.13, 1.12]}
                rotation={[-0.67, -0.91, -0.56]}
                scale={[0.17, 0.16, 0.16]}
                material-color={"gray"}
            />
            <mesh
                geometry={nodes.Circle011.geometry}
                material={materials["Material.023"]}
                position={[-0.7, 1.95, 1.48]}
                rotation={[1.51, -0.36, 1.06]}
                scale={[0.08, 0.08, 0.09]}
                material-color={"black"}
            />
            <mesh
                geometry={nodes.Circle010.geometry}
                material={materials["Material.022"]}
                position={[-0.87, 1.81, 1.26]}
                rotation={[1.57, -0.26, 1.24]}
                scale={[0.02, 0.01, 0.01]}
                material-color={"black"}
            />
            <mesh
                geometry={nodes.Sphere004.geometry}
                material={materials["Material.020"]}
                position={[-0.13, 1.7, 1.01]}
                rotation={[-0.89, -1.04, -0.9]}
                scale={[1.01, 0.85, 0.9]}
                material-color={"gray"}
            />
        </group>
    );
}
useGLTF.preload("/model.gltf");

const ThinkerModel = () => {
    const loc = useRecoilValue(locState);
    return (
        <ModelWrapper>
            <Desc>With</Desc>
            <Desc style={{ top: "40px" }}>REELS</Desc>
            <Blank1 />
            <Blank2 />
            <ContentBlock loc={loc}>
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
                            <Model position={[0, -50, 0]} />
                            <OrbitControls
                                autoRotate={true}
                                autoRotateSpeed={10.0}
                                enableRotate={true}
                                enableZoom={false}
                            />
                        </Stage>
                    </Suspense>
                </Canvas>
            </ContentBlock>
        </ModelWrapper>
    );
};

export default ThinkerModel;
