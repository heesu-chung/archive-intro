import React from "react";
import styled from "styled-components";
import { Desc } from "./KodeKatOverview";
import TextFn from "./text/TextFn";
import Button from "./assets/Button.png";

import Cloth1 from "./assets/clothing00.jpg";
import Cloth2 from "./assets/clothing01.png";
import Cloth3 from "./assets/clothing02.png";

const BrandWrapper = styled.div`
    width: 100%;
    background: black;
    position: relative;
    margin-top: -100px;

    @media (min-width: 800px) {
        display: flex;
        flex-direction: row;
    }
`;

const BrandImgWrapper = styled.div`
    flex: 1;
    width: 100%;
    display: grid;
    grid-template-columns: 33% 34% 33%;
    img {
        object-fit: cover;
        height: 150px;
        @media (max-width: 800px) {
            row-gap: 2px;
        }
        @media (min-width: 800px) {
            height: 250px;
        }
    }

    @media (min-width: 800px) {
        margin-top: 40px;
    }
`;

const ButtonContainer = styled.div`
    a {
        position: relative;
        img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
            transition: 0.5s all ease;
            &:hover {
                opacity: 0.6;
            }
        }
    }
    p {
        color: white;
        font-size: 15px;
        text-align: center;
        letter-spacing: 1px;
        span {
            font-family: "Montserrat", sans-serif;
            color: #0029f7;
            font-weight: 700;
        }
    }
    @media (max-width: 800px) {
        margin-top: 60px;
        a {
            left: 43.5%;
        }
        p {
            margin-top: 15px;
        }
    }

    @media (min-width: 800px) {
        margin-top: 150px;
        a {
            left: 48.2%;
        }
        p {
            margin-top: 15px;
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

const KodeKatBrand = () => {
    return (
        <>
            <BrandWrapper>
                <Desc>
                    <div className="text-container">
                        <p className="category">Brand</p>
                        <p className="title">Commercial</p>
                        {[...textArr].map((el, idx) => (
                            <TextFn key={idx} el={el} idx={idx} op={"small"} />
                        ))}
                    </div>
                </Desc>
                <BrandImgWrapper>
                    <img src={Cloth1} alt="" />
                    <img src={Cloth2} alt="" />
                    <img src={Cloth3} alt="" />
                </BrandImgWrapper>
            </BrandWrapper>
            <ButtonContainer className="button-container">
                <a href="https://marpple.shop/kr/dededef_lab">
                    <img src={Button} alt="" />
                </a>
                <p>
                    Click to visit <span>MARPPLE</span> shop
                </p>
            </ButtonContainer>
        </>
    );
};

export default KodeKatBrand;
