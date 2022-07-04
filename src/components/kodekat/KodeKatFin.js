import React from "react";
import styled from "styled-components";

import Fin from "./assets/Fin.png";

const FinWrapper = styled.div`
    width: 100%;
    background: black;
    margin-top: 50px;
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
            </FinWrapper>
            <Blank />
        </>
    );
};

export default KodeKatFin;
