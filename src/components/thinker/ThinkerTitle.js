import React from "react";
import { useRecoilValue } from "recoil";
import styled, { css } from "styled-components";
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

    /* overflow-y: hidden;
    overflow-x: hidden; */

    @media (min-width: 800px) {
        top: 750px;
    }
`;

const ThinkerWebWrapper = styled.div`
    z-index: 3;
    @media (min-width: 800px) {
        position: absolute;
        width: 100%;
        height: 800px;
        z-index: 3;

        .container {
            margin-top: 50px;
            position: sticky;
            top: 200px;
        }
    }
`;

const ThinkerTitleText = styled.div`
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 3rem;
    letter-spacing: -3px;
    z-index: 3;

    @media (min-width: 800px) {
        font-size: 4rem;
        opacity: 0.5;
        ${(props) =>
            props.idx === 2 &&
            css`
                top: 330px;
            `}
        filter: blur(${(props) => 4 - props.loc / 100}px);
    }
`;

const ThinkerTitle = () => {
    const loc = useRecoilValue(locState);

    return (
        <ThinkerTitleWrapper>
            <ThinkerWebWrapper>
                <div className="container">
                    <ThinkerTitleText loc={loc} idx={1}>
                        Moyang
                    </ThinkerTitleText>
                    <ThinkerTitleText loc={loc} idx={2}>
                        ' the Thinker '
                    </ThinkerTitleText>
                </div>
            </ThinkerWebWrapper>
        </ThinkerTitleWrapper>
    );
};

export default ThinkerTitle;
