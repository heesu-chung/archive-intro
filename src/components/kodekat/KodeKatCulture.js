import React from "react";
import styled from "styled-components";

import FrontVideo from "./assets/FrontVideo.mp4";
import { Desc } from "./KodeKatOverview";
import TextFn from "./text/TextFn";

const CultureWrapper = styled.div`
    position: relative;
    width: 100%;
    background: black;

    @media (min-width: 800px) {
        display: flex;
        flex-direction: row;
    }
`;

const CultureVideo = styled.video`
    @media (max-width: 800px) {
        width: 100%;
    }
    @media (min-width: 800px) {
        width: 50%;
        flex: 1;
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

const KodeKatCulture = () => {
    return (
        <CultureWrapper>
            <CultureVideo
                type="video/mp4"
                src={FrontVideo}
                preload="auto"
                controls
                loop={true}
            />
            <Desc style={{ flex: 1 }}>
                <div className="text-container">
                    <p className="category">Culture</p>
                    <p className="title">Story Telling</p>
                    {[...textArr].map((el, idx) => (
                        <TextFn key={idx} el={el} idx={idx} op={"small"} />
                    ))}
                </div>
            </Desc>
        </CultureWrapper>
    );
};

export default KodeKatCulture;
