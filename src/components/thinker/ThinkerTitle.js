import React, { useRef } from "react";
import styled from "styled-components";

import { AiOutlineArrowDown } from "react-icons/ai";

import ladder from "../../assets/ladder.gif";

const ThinkerTitleWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    div {
        margin-top: 200px;
        display: flex;
        flex-direction: column;
    }

    .scroll-loc {
        border: 1px solid red;
    }
`;

export const TitleText = styled.h1`
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 5rem;
    letter-spacing: -2px;

    position: relative;
    z-index: 3;
    top: 30%;
    transform: translateY(-50%);
    text-align: center;

    @media (max-width: 800px) {
        font-size: 3rem;
        top: 45%;
    }
`;

const CoverImage = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    position: relative;
    z-index: 3;
`;

export const ScrollDownMark = styled.div`
    position: fixed;
    top: 420px;
    left: 50px;
    width: 50px;
    height: 50px;
    z-index: 4;
    border: 2px solid #aaa;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s all ease;

    &:hover {
        border: 2px solid var(--point-color);
    }

    .icon {
        color: #aaa;
        font-size: 1.3rem;
        transition: 0.5s all ease;
        cursor: pointer;
        &:hover {
            transform: translateY(30%);
            color: var(--point-color);
        }
    }

    @media (max-width: 800px) {
        top: 90%;
    }
`;

const ThinkerTitle = () => {
    const scrollRef = useRef(null);
    const clickScrollDown = () => {
        scrollRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <ThinkerTitleWrapper>
            <div>
                <TitleText>Moyang</TitleText>
                <TitleText>' the Thinker '</TitleText>
                <CoverImage src={ladder} alt="" />
            </div>
            <ScrollDownMark onClick={clickScrollDown}>
                <AiOutlineArrowDown className="icon" />
            </ScrollDownMark>
            <div className="scroll-loc" ref={scrollRef}></div>
        </ThinkerTitleWrapper>
    );
};

export default ThinkerTitle;
