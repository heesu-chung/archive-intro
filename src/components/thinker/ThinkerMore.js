import React from "react";
import { useRecoilValue } from "recoil";
import styled, { keyframes } from "styled-components";
import { locState } from "../../App";

import { BsInstagram } from "react-icons/bs";
import OnScroll from "../global/OnScroll";

const MoreWrapper = styled.div`
    position: relative;
    top: 100px;
    z-index: 1;

    .desc {
        .desc-web {
            p {
                font-family: "Montserrat", sans-serif;
                font-size: 40px;
                font-weight: 700;
                text-align: center;
                transition: 0.5s all ease;
                background: linear-gradient(to right, #e10e26, #7938b2);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                margin-top: -5px;
            }
            @media (min-width: 800px) {
                width: 20%;
                background: black;
            }
        }

        .visit {
            margin-top: 15px;
        }
    }

    @media (min-width: 800px) {
        top: 80px;
    }
`;

const InstaAni = keyframes`
    0% {
        font-size: 60px;
        color: var(--point-color);
    } 33% {
        font-size: 64px;
        color: white;
    } 50% {
        
        color: white;
    }80% {
        font-size: 60px;
        color: var(--point-color);
    }
    100% {
        
        color: var(--point-color);
    }
`;

const VisitInstagram = styled.div`
    margin-top: 30px;
    font-size: 60px;
    text-align: center;
    .icon {
        text-decoration: none;
        color: var(--point-color);

        @media (min-width: 800px) {
            transition: 0.3s all ease;
            width: 64px;
            animation: ${InstaAni} 2s 1s infinite ease;
            &:hover {
                font-size: 64px;
                color: white;
                animation-play-state: paused;
            }
        }
    }
    @media (min-width: 800px) {
    }
`;

const ThinkerMore = () => {
    const loc = useRecoilValue(locState);
    return (
        <MoreWrapper>
            <OnScroll />
            <div className="desc">
                <div className="desc-web">
                    <p loc={loc}>For</p>
                    <p loc={loc}>More</p>
                    <p loc={loc}>Contents</p>
                    <p className="visit" loc={loc}>
                        Visit
                    </p>
                    <p loc={loc}>My</p>
                </div>
            </div>
            <VisitInstagram>
                <a href="https://www.instagram.com/dededef_lab/">
                    <BsInstagram className="icon" />
                </a>
            </VisitInstagram>
            <div className="desc">
                <div className="desc-web">
                    <p
                        loc={loc}
                        style={{ marginTop: "10px", fontSize: "25px" }}
                    >
                        @dededef_lab
                    </p>
                </div>
            </div>
        </MoreWrapper>
    );
};

export default ThinkerMore;
