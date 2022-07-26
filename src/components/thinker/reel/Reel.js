import React from "react";
import styled, { css } from "styled-components";
import { useRecoilValue } from "recoil";
import { locState } from "../../../App.js";

// assets
import HomeButton from "./assets/HomeButton.mp4";
import Metaverse from "./assets/Metaverse.mp4";
import Pillow from "./assets/Pillow.mp4";

const ReelWrapper = styled.video`
    width: 200px;
    height: 360px;
    position: absolute;

    overflow: hidden;
    left: 50%;
    transform: translateX(-50%);
    transition: 0.8s all ease-in-out;
    z-index: 5;
    ${(props) =>
        props.idx === 0 && props.loc > 4500
            ? css`
                  transform: translateX(-500px);
                  opacity: 1;
                  z-index: 7;
              `
            : css`
                  z-index: 6;
              `}

    ${(props) =>
        props.idx === 1 && props.loc <= 4500
            ? css`
                  opacity: 0;
                  display: none;
                  z-index: 4;
              `
            : css`
                  opacity: 1;
                  z-index: 5;
              `}
    ${(props) =>
        props.idx === 1 && props.loc > 4900
            ? css`
                  transform: translateX(-500px);
              `
            : css`
                  z-index: 6;
              `}

              ${(props) =>
        props.idx === 2 && props.loc <= 4900
            ? css`
                  opacity: 0;
                  display: none;
                  z-index: 4;
              `
            : css`
                  opacity: 1;
                  z-index: 5;
              `}
    ${(props) =>
        props.idx === 2 && props.loc > 5400
            ? css`
                  transform: translateX(-500px);
              `
            : css`
                  z-index: 6;
              `}


    @media ( min-width: 800px) {
        display: none;
    }
`;

const ReelWrapperWeb = styled.video`
    @media (max-width: 800px) {
        display: none;
    }
    @media (min-width: 800px) {
        width: 20vw;

        transition: 1s all ease-out;
        position: absolute;

        overflow: hidden;
        top: 3vh;
        left: 14.5vw;

        z-index: 5;
        ${(props) =>
            props.idx === 0 && props.loc > 8800
                ? css`
                      transform: translateX(-2000px);
                      opacity: 1;
                      z-index: 7;
                  `
                : css`
                      z-index: 6;
                  `}

        ${(props) =>
            props.idx === 1 && props.loc <= 8800
                ? css`
                      opacity: 0;
                      display: none;
                      z-index: 4;
                  `
                : css`
                      opacity: 1;
                      z-index: 5;
                  `}
         ${(props) =>
            props.idx === 1 && props.loc > 9800
                ? css`
                      transform: translateX(-2000px);
                  `
                : css`
                      z-index: 6;
                  `}

              ${(props) =>
            props.idx === 2 && props.loc <= 9800
                ? css`
                      opacity: 0;
                      display: none;
                      z-index: 4;
                  `
                : css`
                      opacity: 1;
                      z-index: 5;
                  `}
    }
`;

const ReelDesc = styled.div`
    position: absolute;
    width: 200px;
    top: 370px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    color: #aaa;
    overflow: hidden;
    z-index: 3;
    .title {
        font-family: "Montserrat", sans-serif;
        font-size: 16px;
        font-weight: 700;
        color: white;
        margin-bottom: 5px;
    }
    transition: 0.5s all ease;

    ${(props) =>
        props.idx === 0 &&
        css`
            opacity: 0;
            ${(props) =>
                props.loc < 4500 &&
                props.loc >= 3000 &&
                css`
                    opacity: 1;
                    /* transform: translateX(-50%); */
                `}
        `}
    ${(props) =>
        props.idx === 1 &&
        css`
            opacity: 0;
            ${(props) =>
                props.loc < 4900 &&
                props.loc >= 4500 &&
                css`
                    opacity: 1;
                    /* transform: translateX(-50%); */
                `}
        `}
    ${(props) =>
        props.idx === 2 &&
        css`
            opacity: 0;
            ${(props) =>
                props.loc < 5300 &&
                props.loc >= 4900 &&
                css`
                    opacity: 1;
                    /* transform: translateX(-50%); */
                `}
        `}
`;

const ReelDescWeb = styled.div`
    @media (max-width: 800px) {
        display: none;
    }
    @media (min-width: 800px) {
        position: absolute;
        width: 300px;
        top: 370px;
        left: 72%;
        transform: translateX(-50%);
        font-size: 14px;
        color: #aaa;
        overflow: hidden;
        z-index: 3;
        .title {
            font-family: "Montserrat", sans-serif;
            font-size: 20px;
            font-weight: 700;
            color: white;
            margin-bottom: 13px;
        }
        transition: 0.5s all ease;

        ${(props) =>
            props.idx === 0 &&
            css`
                opacity: 0;
                ${(props) =>
                    props.loc < 8800 &&
                    props.loc >= 6000 &&
                    css`
                        opacity: 1;
                        /* transform: translateX(-50%); */
                    `}
            `}
        ${(props) =>
            props.idx === 1 &&
            css`
                opacity: 0;
                ${(props) =>
                    props.loc < 9800 &&
                    props.loc >= 8800 &&
                    css`
                        opacity: 1;
                        /* transform: translateX(-50%); */
                    `}
            `}
    ${(props) =>
            props.idx === 2 &&
            css`
                opacity: 0;
                ${(props) =>
                    props.loc >= 9800 &&
                    css`
                        opacity: 1;
                        /* transform: translateX(-50%); */
                    `}
            `}
    }
`;

const Reel = ({ idx, el }) => {
    const loc = useRecoilValue(locState);
    return (
        <>
            {idx === 0 && (
                <>
                    <ReelWrapper
                        className="react-player"
                        type="video/mp4"
                        src={Pillow}
                        preload="auto"
                        controls
                        muted={loc <= 4500 ? false : true}
                        loop={loc <= 4500 ? true : false}
                        loc={loc}
                        idx={idx}
                    />
                    <ReelDesc idx={0} loc={loc}>
                        <p className="title">Please, Shut Up</p>
                        <p>Apr 22th</p>
                        <p>JAWNY - Honeypie</p>
                    </ReelDesc>

                    <ReelWrapperWeb
                        className="react-player"
                        type="video/mp4"
                        src={Pillow}
                        preload="auto"
                        controls
                        muted={loc <= 8800 ? false : true}
                        loop={loc <= 8800 ? true : false}
                        loc={loc}
                        idx={idx}
                    />
                    <ReelDescWeb idx={0} loc={loc}>
                        <p className="title">Please, Shut Up</p>
                        <p>Apr 22th</p>
                        <p>JAWNY - Honeypie</p>
                    </ReelDescWeb>
                </>
            )}
            {idx === 1 && (
                <>
                    <ReelWrapper
                        className="react-player"
                        type="video/mp4"
                        src={Metaverse}
                        preload="auto"
                        controls
                        muted={loc <= 4900 && loc >= 4500 ? false : true}
                        loop={loc <= 4900 && loc >= 4500 ? true : false}
                        loc={loc}
                        idx={idx}
                    />
                    <ReelDesc idx={1} loc={loc}>
                        <p className="title">Welcome to the Metaverse</p>
                        <p>Mar 28th</p>
                        <p>King Gnu - Teenager Forever</p>
                    </ReelDesc>

                    <ReelWrapperWeb
                        className="react-player"
                        type="video/mp4"
                        src={Metaverse}
                        preload="auto"
                        controls
                        muted={loc <= 9800 && loc >= 8800 ? false : true}
                        loop={loc <= 9800 && loc >= 8800 ? true : false}
                        loc={loc}
                        idx={idx}
                    />
                    <ReelDescWeb idx={1} loc={loc}>
                        <p className="title">Welcome to the Metaverse</p>
                        <p>Mar 28th</p>
                        <p>King Gnu - Teenager Forever</p>
                    </ReelDescWeb>
                </>
            )}
            {idx === 2 && (
                <>
                    <ReelWrapper
                        className="react-player"
                        type="video/mp4"
                        src={HomeButton}
                        preload="auto"
                        controls
                        muted={loc <= 5400 && loc >= 4900 ? false : true}
                        loop={loc <= 5400 && loc >= 4900 ? true : false}
                        loc={loc}
                        idx={idx}
                    />
                    <ReelDesc idx={2} loc={loc}>
                        <p className="title">TOYP & GOYH</p>
                        <p>May 7th</p>
                        <p>ZAAC, Anitta, Tyga•Desce Pro Play (PA PA PA)</p>
                    </ReelDesc>

                    <ReelWrapperWeb
                        className="react-player"
                        type="video/mp4"
                        src={HomeButton}
                        preload="auto"
                        controls
                        muted={loc >= 9800 ? false : true}
                        loop={loc >= 9800 ? true : false}
                        loc={loc}
                        idx={idx}
                    />
                    <ReelDescWeb idx={2} loc={loc}>
                        <p className="title">TOYP & GOYH</p>
                        <p>May 7th</p>
                        <p>ZAAC, Anitta, Tyga - Desce Pro Play (PA PA PA)</p>
                    </ReelDescWeb>
                </>
            )}
        </>
    );
};

export default Reel;
