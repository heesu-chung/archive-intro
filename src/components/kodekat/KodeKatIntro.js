import React from "react";
import styled from "styled-components";

import KodeKatCrew from "./assets/kodekatcrew.jpg";
import TextFn from "./text/TextFn";

const IntroWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    height: 450px;
    .img-container {
        display: flex;
        flex-direction: row;
        .icon {
            width: 80%;
        }
    }
    @media (min-width: 800px) {
        height: 1200px;
        .img-container {
            width: 50%;
        }
    }
`;

const IntroDesc = styled.div`
    position: relative;
    left: 10%;
    margin-top: 20px;
    @media (min-width: 800px) {
        margin-top: 80px;
    }
`;

const textArr = [
    `Kode Kat은`,
    `자체적으로 디자인 한 오리지널 캐릭터입니다`,
    `@dededef_lab에선 해당 캐릭터를 활용한`,
    `3D & 2D 콘텐츠를 제작했으며,`,
    `콘텐츠와 상품의 형태로 브랜드를 전달하고자 합니다`,
];

const KodeKatIntro = () => {
    const op = "white";
    return (
        <IntroWrapper>
            <div className="img-container">
                <img className="icon char" src={KodeKatCrew} alt="" />
            </div>
            <IntroDesc>
                {[...textArr].map((el, idx) => (
                    <TextFn key={idx} el={el} idx={idx} op={op} />
                ))}
            </IntroDesc>
        </IntroWrapper>
    );
};

export default KodeKatIntro;
