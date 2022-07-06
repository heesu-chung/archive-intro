import React from "react";
import styled from "styled-components";

import Fin from "./assets/Fin.png";
import logo from "./assets/logo.png";

const FinWrapper = styled.div`
    width: 100%;
    background: black;
    margin-top: 50px;
    display: flex;
    flex-direction: column;

    .logo {
        margin-top: 50px;
        width: 80%;
        @media (min-width: 800px) {
            width: 30%;
        }
    }
`;

const Blank = styled.div`
    position: absolute;
    background: black;
    width: 100%;
    height: 200px;
`;

const KodeKatFin = () => {
    return (
        <>
            <FinWrapper>
                <img src={Fin} alt="" />
                <img src={logo} className="logo" alt="" />
            </FinWrapper>
            <Blank />
        </>
    );
};

export default KodeKatFin;
