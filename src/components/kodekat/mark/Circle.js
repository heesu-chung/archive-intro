import React from "react";
import styled, { keyframes } from "styled-components";

const CircleAni = keyframes`
    0% {

    } 45% {
        transform: translateX(100px);
        transform: translateY(-30px);
    } 55% {
        transform: translateX(100px);
        transform: translateY(-30px);
    } 100% {
    }
`;

const CircleBlock = styled.div`
    position: absolute;
    width: 25px;
    height: 25px;
    left: 48%;
    border-radius: 50%;
    background: white;
    opacity: 0.3;
    animation: ${CircleAni} 4s 1s infinite ease-in-out;

    @media (min-width: 800px) {
        z-index: 5;
        top: 1870px;

        background: white;
    }
`;

const Circle = () => {
    return <CircleBlock />;
};

export default Circle;
