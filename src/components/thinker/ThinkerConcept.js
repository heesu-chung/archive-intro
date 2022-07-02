import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { locState } from "../../App";

const ThinkerConceptWrapper = styled.div`
    width: 100%;
    height: 1600px;
    display: flex;
    flex-direction: row;
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
    @media (min-width: 800px) {
    }
`;

const ThinkerConceptText = styled.div`
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 50px;
    color: #fafafa;
    margin: 50px 0;
    text-align: center;
    opacity: ${(props) => (props.loc - 266) / 2}%;

    @media (min-width: 800px) {
    }
`;

const ThinkerConcept = () => {
    const loc = useRecoilValue(locState);

    return (
        <ThinkerConceptWrapper>
            <ThinkerConceptContainer loc={loc}>
                <ThinkerConceptText loc={loc} style={{ marginTop: "220px" }}>
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
