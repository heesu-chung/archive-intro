import React from "react";
import styled from "styled-components";

import FrontVideo from "./assets/FrontVideo.mp4";
import Culture1 from "./assets/Culture1.jpg";
import Culture2 from "./assets/Culture2.jpg";
import Culture3 from "./assets/Culture3.jpg";
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

const CultureImgWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    div {
        display: flex;
        flex-direction: row;
        img {
            object-fit: cover;
            height: 200px;
            margin-top: 10px;
        }
    }
    @media (min-width: 800px) {
        img {
            height: 600px;
        }
    }
`;

const CultureVideo = styled.video`
    @media (max-width: 800px) {
        width: 100%;
    }
    @media (min-width: 800px) {
        width: 100%;
        flex: 1;
    }
`;

const textArr = [
    "캐릭터들에 대한 접근성을 높이고, 친근한 이미지를 더하는 브랜딩을 위해 ",
    "대중적인 문화적 코드를 활용한 콘텐츠를 제작합니다",
];

const KodeKatCulture = () => {
    return (
        <CultureWrapper>
            <CultureImgWrapper>
                <CultureVideo
                    type="video/mp4"
                    src={FrontVideo}
                    preload="auto"
                    controls
                    loop={true}
                />
                <div>
                    <img src={Culture1} alt="" />
                    <img src={Culture2} alt="" />
                    <img src={Culture3} alt="" />
                </div>
            </CultureImgWrapper>
            <Desc style={{ flex: 1 }}>
                <div className="text-container">
                    <p className="category">Cultural Code</p>
                    <p className="title">Branding</p>
                    {[...textArr].map((el, idx) => (
                        <TextFn key={idx} el={el} idx={idx} op={"small"} />
                    ))}
                </div>
            </Desc>
        </CultureWrapper>
    );
};

export default KodeKatCulture;
