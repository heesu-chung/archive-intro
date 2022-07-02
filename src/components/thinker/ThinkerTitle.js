import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { locState } from "../../App";

const ThinkerTitleWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 40rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    overflow-y: hidden;
    overflow-x: hidden;

    @media (min-width: 800px) {
    }
`;

const ThinkerTitleText = styled.div`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 3rem;
    letter-spacing: -3px;
    z-index: 3;
    @media (min-width: 800px) {
        font-size: 5rem;
        opacity: 0.5;
        filter: blur(2px);

        filter: blur(${(props) => props.loc / 100 + 0.5}px);
    }
`;

const ThinkerTitle = () => {
    const loc = useRecoilValue(locState);

    return (
        <ThinkerTitleWrapper>
            <ThinkerTitleText loc={loc}>Moyang</ThinkerTitleText>
            <ThinkerTitleText loc={loc}>' the Thinker '</ThinkerTitleText>
        </ThinkerTitleWrapper>
    );
};

export default ThinkerTitle;
