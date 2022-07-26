import React from "react";
import styled, { css } from "styled-components";
import Mesh from "./assets/Mesh.jpg";
import Circle from "./mark/Circle";
import TextFn from "./text/TextFn";

const OverviewWrapper = styled.div`
    /* position: relative; */
    background: black;
    overflow: hidden;
    @media (min-width: 800px) {
        display: flex;
        flex-direction: row;
    }
`;

export const Desc = styled.div`
    height: 300px;
    .text-container {
        margin-top: 50px;
        width: 90%;

        .category {
            color: #999;
            font-size: 12px;
        }
        .title {
            color: white;
            font-size: 14px;
            margin: 15px 0;
            letter-spacing: 1px;
        }
    }

    @media (min-width: 800px) {
        flex: 1;
        .text-container {
            height: 300px;
            width: 80%;
            ${(props) =>
                props.op === 1 &&
                css`
                    padding-left: 10%;
                `}
            .category {
                color: #999;
            }
            .title {
                font-size: 18px;
                font-weight: 700;
                margin-bottom: 20px;
            }
        }
    }
`;

const OverviewImg = styled.img`
    width: 100%;

    @media (min-width: 800px) {
        width: 300px;
        flex: 1;
    }
`;

const textArr = [
    "Kode Kat은 고양이의 외형을 모티브로 한 캐릭터이며,",
    "표정을 통해 사람들의 장난기 있는 감정을 표현합니다",
    ``,
    "컨텐츠의 확장성과 대중성을 지향한 미니멀 디자인을 추구하며,",
    "컨텐츠 전반에 긍정적인 감정선, 다양성과 확장,",
    "연결과 공동체의 가치를 전달하고자 합니다",
];

const KodeKatOverview = () => {
    return (
        <OverviewWrapper>
            <OverviewImg src={Mesh} />
            <Desc>
                <div className="text-container">
                    <p className="category">Motif</p>
                    <p className="title">Appearance</p>
                    <Circle />
                    {[...textArr].map((el, idx) => (
                        <TextFn key={idx} el={el} idx={idx} op={"small"} />
                    ))}
                </div>
            </Desc>
        </OverviewWrapper>
    );
};

export default KodeKatOverview;
