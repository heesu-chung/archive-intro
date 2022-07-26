import React from "react";
import { useRecoilValue } from "recoil";
import styled, { css, keyframes } from "styled-components";
import { locState } from "../../App";

import Reel from "./reel/Reel";
import Phone from "./reel/assets/IPhone_X.png";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import OnScroll from "../global/OnScroll";

const ReelsWrapper = styled.div`
    position: relative;
    height: 2000px;
    margin-top: 100px;

    @media (min-width: 800px) {
        height: 2500px;
    }
`;

const StickyReels = styled.div`
    position: sticky;
    top: 100px;

    @media (min-width: 800px) {
        top: 18vh;
    }
`;

const DirAnimation = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: translateY(20px);
    }
`;

const ScrollNext = styled.div`
    width: 100%;
    height: 100px;

    position: absolute;
    top: 70vh;

    opacity: 0;
    transition: 0.5s all ease;
    ${(props) =>
        props.loc > 3000 &&
        props.loc < 5400 &&
        css`
            opacity: 1;
        `}

    .desc {
        text-align: center;
        color: #aaa;
        font-size: 15px;
        margin-bottom: 15px;
    }
    .dir {
        color: white;
        .icon {
            font-size: 1.3rem;
            animation: ${DirAnimation} 1.5s 0.3s infinite linear running;
        }
    }

    @media (min-width: 800px) {
        height: 70vh;
        background: black;
        transition: 0.3s all ease;
        z-index: 1;
        top: 200px;

        ${(props) =>
            props.loc > 7800 &&
            css`
                opacity: 1;
            `};
        .desc .dir {
            position: absolute;
            left: 80%;
        }
    }
`;

const PhoneWrapper = styled.div`
    @media (max-width: 800px) {
        visibility: hidden;
    }
    @media (min-width: 800px) {
        position: absolute;
        visibility: visible;
        z-index: 2;
        width: 23vw;
        left: 13vw;
        top: -6vh;
    }
`;

const video = ["HomeButton", "Metaverse", "Pillow"];

const ThinkerReel = () => {
    const loc = useRecoilValue(locState);

    return (
        <ReelsWrapper>
            <OnScroll />
            <StickyReels>
                {[...video].map((el, idx) => (
                    <Reel key={idx} idx={idx} el={el} />
                ))}

                <PhoneWrapper>
                    <img src={Phone} alt="" />
                </PhoneWrapper>

                <ScrollNext loc={loc}>
                    <p className="desc" loc={loc}>
                        SCROLL TO NEXT CONTENTS
                    </p>
                    <div className="dir" loc={loc}>
                        <HiOutlineChevronDoubleDown
                            className="icon"
                            loc={loc}
                        />
                    </div>
                </ScrollNext>
            </StickyReels>
        </ReelsWrapper>
    );
};

export default ThinkerReel;
