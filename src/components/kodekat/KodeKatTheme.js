import React, { useRef, useState, useEffect } from "react";
import styled, { css } from "styled-components";

import PDClose from "./assets/PixelData_Close.jpg";
import PD from "./assets/PixelData.jpg";
import PDFloor from "./assets/PixelDataFloor.png";
import PDFly from "./assets/PixelDataFly.jpg";
import TextFn from "./text/TextFn";
import { Desc } from "./KodeKatOverview";

const ThemeContainer = styled.div`
    width: 100%;
    background: black;
`;

const ThemeWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    row-gap: 10px;

    @media (min-width: 800px) {
        grid-template-columns: 25% 25% 25% 25%;
    }
`;

const ThemeImg = styled.div`
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 2s all ease-in-out;

        ${(props) =>
            props.idx === props.index
                ? css`
                      opacity: 1;
                      transform: scale(1.1);
                      -moz-transform: scale(1.1);
                      -o-transform: scale(1.1);
                  `
                : css`
                      opacity: 0.7;
                  `}

        &:hover {
            transform: scale(1.1);
            -moz-transform: scale(1.1);
            -o-transform: scale(1.1);
            opacity: 1;
        }
    }
`;

const textArr = [
    "Kode Kat은 개발과 코드를 통해 세상을 바라봅니다",
    "환경과 현상에 대해 고민하고 관찰하며",
    "호기심을 가지고 끊임없이 도전하면서",
    "스스로 성장하는 라이프 스타일을 추구합니다",
];

const KodeKatTheme = () => {
    const [idx, setIdx] = useState(1);
    const savedCallback = useRef();

    const callback = () => {
        if (idx === 4) setIdx(1);
        else setIdx(idx + 1);
    };

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        const interval = () => {
            savedCallback.current();
        };
        const timer = setInterval(interval, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <ThemeContainer>
            <ThemeWrapper>
                <ThemeImg idx={idx} index={1}>
                    <img src={PD} alt="" />
                </ThemeImg>
                <ThemeImg idx={idx} index={2}>
                    <img src={PDClose} alt="" />
                </ThemeImg>
                <ThemeImg idx={idx} index={3}>
                    <img src={PDFloor} alt="" />
                </ThemeImg>
                <ThemeImg idx={idx} index={4}>
                    <img src={PDFly} alt="" />
                </ThemeImg>
            </ThemeWrapper>
            <Desc>
                <div className="text-container">
                    <p className="category">Theme</p>
                    <p className="title">Life Style Kode</p>
                    {[...textArr].map((el, idx) => (
                        <TextFn key={idx} el={el} idx={idx} op={"small"} />
                    ))}
                </div>
            </Desc>
        </ThemeContainer>
    );
};

export default KodeKatTheme;
