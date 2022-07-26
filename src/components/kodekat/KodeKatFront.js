import React from "react";
import styled from "styled-components";
import FrontGif from "./assets/frontgif.gif";

const FrontWrapper = styled.div`
    width: 100%;
    overflow: hidden;
`;

const FrontContainer = styled.div`
    width: 100%;
    background: white;
    margin-top: 130px;
    height: 250px;

    background: black;
    overflow-x: hidden;
    overflow-y: hidden;
    @media (min-width: 800px) {
        width: 120%;
        margin-left: -180px;
        margin-top: 0;
        opacity: 0.5;
        height: 100vh;
    }
`;

const KodeKatFront = () => {
    return (
        <FrontWrapper>
            <FrontContainer>
                <img src={FrontGif} alt="" />
            </FrontContainer>
        </FrontWrapper>
    );
};

export default KodeKatFront;
