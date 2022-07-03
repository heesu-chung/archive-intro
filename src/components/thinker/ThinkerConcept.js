import React from "react";
import { useRecoilValue } from "recoil";
import styled, { css } from "styled-components";
import { locState } from "../../App";

const ThinkerConceptWrapper = styled.div`
    width: 100%;
    height: 1600px;

    /* border: 2px solid red; */
    z-index: 3;

    @media (min-width: 800px) {
        height: 5000px;
        margin-top: 250px;
    }
`;

const ThinkerConceptContainer = styled.div`
    position: sticky;
    position: -webkit-sticky;
    width: 100%;
    height: 800px;
    top: 0px;
    /* background-color: blue; */
    padding-top: 200px;
    @media (min-width: 800px) {
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
    }
`;

const ThinkerConceptText = styled.p`
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 50px;
    color: #fafafa;
    margin: 50px 0;
    text-align: center;
    opacity: ${(props) => (props.loc - 266) / 2}%;

    @media (min-width: 800px) {
        padding: 200px 0;
        opacity: 0.5;
        transition: 0.5s all ease;
        filter: blur(6px);

        ${(props) =>
            props.loc > 3000 &&
            css`
                opacity: 0;
            `}

        ${(props) =>
            props.idx === 1 &&
            css`
                ${(props) =>
                    props.loc > 1000 &&
                    props.loc < 3000 &&
                    css`
                        opacity: 1;
                        filter: blur(0px);
                    `}
            `}
        ${(props) =>
            props.idx === 2 &&
            props.loc < 3000 &&
            css`
                ${(props) =>
                    props.loc > 1300 &&
                    css`
                        opacity: 1;
                        filter: blur(0px);
                    `}
            `}
        ${(props) =>
            props.idx === 3 &&
            props.loc < 3000 &&
            css`
                ${(props) =>
                    props.loc > 1600 &&
                    css`
                        opacity: 1;
                        filter: blur(0px);
                    `}
            `}
        ${(props) =>
            props.idx === 4 &&
            props.loc < 3000 &&
            css`
                ${(props) =>
                    props.loc > 1900 &&
                    css`
                        opacity: 1;
                        filter: blur(0px);
                    `}
            `}
    }
`;

const ThinkerConcept = () => {
    const loc = useRecoilValue(locState);

    return (
        <ThinkerConceptWrapper>
            <ThinkerConceptContainer loc={loc}>
                <ThinkerConceptText loc={loc} idx={1}>
                    생각의 모양은
                </ThinkerConceptText>
                <ThinkerConceptText loc={loc - 80} idx={2}>
                    생각하는
                </ThinkerConceptText>
                <ThinkerConceptText loc={loc - 160} idx={3}>
                    우리의 모습을
                </ThinkerConceptText>
                <ThinkerConceptText loc={loc - 200} idx={4}>
                    표현합니다
                </ThinkerConceptText>
            </ThinkerConceptContainer>
        </ThinkerConceptWrapper>
    );
};

export default ThinkerConcept;
