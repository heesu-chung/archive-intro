import React from "react";
import styled from "styled-components";

const BlankWrapper = styled.div`
    position: relative;
    background: black;
    width: 100%;
    height: ${(props) => props.mobile}px;

    @media (min-width: 800px) {
        height: ${(props) => props.web}px;
    }
`;

const Blank = ({ mobile, web }) => {
    return <BlankWrapper mobile={mobile} web={web} />;
};

export default Blank;
