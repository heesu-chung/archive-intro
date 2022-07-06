import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";

import Story1 from "./assets/Story1.png";
import Story2 from "./assets/Story2.jpg";
import Story3 from "./assets/Story3.png";
import Story4 from "./assets/Story4.jpg";
import Story5 from "./assets/Story5.jpg";
import Story6 from "./assets/Story6.png";
import Story7 from "./assets/Story7.jpg";
import Story8 from "./assets/Story8.png";
import Story10 from "./assets/Story10.png";
import Story11 from "./assets/Story11.png";
import Meet from "./assets/Meet.png";

import { Desc } from "./KodeKatOverview";
import TextFn from "./text/TextFn";

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 200px;
    ${(props) =>
        props.op === "transparent"
            ? css`
                  background: black;
                  opacity: 0.3;
                  margin-top: -200px;
                  transition: 0.4s all ease-in-out;

                  &:hover {
                      opacity: 0;
                  }
              `
            : css`
                  background: black;
              `}
    overflow: hidden;
`;

const StoryWrapper = styled.div`
    position: relative;
    width: 100%;
    margin-top: -200px;
    overflow: hidden;

    /* ${(props) => props.bar} */

    @media (min-width: 800px) {
    }
`;

const StoryLine = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: -${(props) => props.bar % 1000}px;

    @media (min-width: 800px) {
        margin-left: -${(props) => props.bar % 2000}px;
    }
`;

const StoryBlock = styled.img`
    height: 100px;
    object-fit: cover;
    @media (min-width: 800px) {
        height: 200px;
    }
`;

const DescWrapper = styled.div`
    width: 100%;
    margin-top: 100px;
    @media (min-width: 800px) {
        width: 100%;
        display: flex;
        flex-direction: row;

        div {
            img {
                object-fit: cover;
                height: 400px;
            }
        }
    }
`;

const textArr = [
    "Kode Kat은 고양이의 외형을 모티브로 한 캐릭터이며,",
    "표정을 통해 사람들의 장난기 있는 감정을 표현하고자 합니다",
    ``,
    "컨텐츠의 확장성과 대중을 지향한 미니멀 디자인을 추구하며,",
    "컨텐츠 전반에 긍정적인 감정선과",
    "다양성과 확장,",
    "연결과 공동체의 가치를 전달하고자 합니다",
];

const KodeKatStory = () => {
    const [bar, setBar] = useState(0);
    const savedCallback = useRef();

    const callback = () => {
        setBar(bar + 1);
    };
    useEffect(() => {
        savedCallback.current = callback;
    });
    useEffect(() => {
        const interval = () => {
            savedCallback.current();
        };
        const timer = setInterval(interval, 20);
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <Wrapper />
            <StoryWrapper bar={bar}>
                <StoryLine bar={bar}>
                    <StoryBlock src={Story1} alt="" />
                    <StoryBlock src={Story2} alt="" />
                    <StoryBlock src={Story3} alt="" />
                    <StoryBlock src={Story4} alt="" />
                    <StoryBlock src={Story5} alt="" />
                    <StoryBlock src={Story6} alt="" />
                    <StoryBlock src={Story7} alt="" />
                    <StoryBlock src={Story8} alt="" />
                    <StoryBlock src={Story10} alt="" />
                    <StoryBlock src={Story11} alt="" />
                    <StoryBlock src={Story1} alt="" />
                    <StoryBlock src={Story2} alt="" />
                    <StoryBlock src={Story3} alt="" />
                    <StoryBlock src={Story4} alt="" />
                    <StoryBlock src={Story5} alt="" />
                    <StoryBlock src={Story6} alt="" />
                    <StoryBlock src={Story7} alt="" />
                    <StoryBlock src={Story8} alt="" />
                    <StoryBlock src={Story10} alt="" />
                    <StoryBlock src={Story11} alt="" />
                </StoryLine>
            </StoryWrapper>
            <Wrapper op={"transparent"} />
            <DescWrapper>
                <div className="blank" style={{ flex: 1 }}>
                    <img src={Meet} alt="" />
                </div>
                <Desc style={{ flex: 1 }}>
                    <div className="text-container">
                        <p className="category">Content</p>
                        <p className="title">Story Telling</p>
                        {[...textArr].map((el, idx) => (
                            <TextFn key={idx} el={el} idx={idx} op={"small"} />
                        ))}
                    </div>
                </Desc>
            </DescWrapper>
        </>
    );
};

export default KodeKatStory;
