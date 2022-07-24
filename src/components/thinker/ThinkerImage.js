import React from "react";
import { useRecoilValue } from "recoil";
import styled, { css } from "styled-components";
import { locState } from "../../App";
import ladder from "../../assets/ladder.gif";
import titleLogo from "../../assets/title.png";
import OnScroll from "../global/OnScroll";

const ThinkerImgWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100rem;
    /* border: 1px solid black; */
    overflow: hidden;
    @media (min-width: 800px) {
        height: 300rem;
    }
`;

const ImageWrapper = styled.img`
    position: absolute;
    width: 15rem;
    height: 15rem;
    background: white;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
    top: 400px;
    z-index: 2;
    @media (min-width: 800px) {
        width: 25rem;
        height: 25rem;
        /* top: 450px; */
        top: 230px;
    }
`;

const ThinkerTitleLogo = styled.div`
    position: relative;

    top: 670px;
    width: 200px;
    z-index: 3;

    @media (min-width: 800px) {
        top: 150px;
        width: 250px;
    }
`;

const BGWrapper = styled.div`
    position: absolute;
    background: var(--point-color);
    width: 13rem;
    height: 13rem;
    border-radius: 50%;
    top: 415px;
    left: 22.5%;
    z-index: 1;
    transition: 0.8s all ease;
    ${(props) =>
        props.loc > 100
            ? css`
                  transform: scale(40);
              `
            : css``}

    @media (min-width: 800px) {
        left: 43.2%;
        top: 325px;
    }
`;

const ThinkerImage = () => {
    const loc = useRecoilValue(locState);

    return (
        <ThinkerImgWrapper>
            <OnScroll />
            <ImageWrapper src={ladder} />
            <ThinkerTitleLogo>
                <img src={titleLogo} alt=""></img>
            </ThinkerTitleLogo>
            <BGWrapper loc={loc} />
        </ThinkerImgWrapper>
    );
};

export default ThinkerImage;
