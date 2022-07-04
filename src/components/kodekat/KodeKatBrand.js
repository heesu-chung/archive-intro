import React from "react";
import styled from "styled-components";
import { Desc } from "./KodeKatOverview";
import TextFn from "./text/TextFn";
import Button from "./assets/Button.png";

const BrandWrapper = styled.div`
    width: 100%;
    background: black;
    position: relative;
    margin-top: -100px;

    @media (min-width: 800px) {
    }
    .button-container {
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
            a {
                left: 43.5%;
            }
            p {
                margin-top: 15px;
            }
        }

        @media (min-width: 800px) {
            a {
                left: 48.2%;
            }
            p {
                margin-top: 15px;
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

const KodeKatBrand = () => {
    return (
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
            <div className="button-container">
                <a href="https://marpple.shop/kr/dededef_lab">
                    <img src={Button} alt="" />
                </a>
                <p>
                    Click to visit <span>MARPPLE</span> shop
                </p>
            </div>
        </BrandWrapper>
    );
};

export default KodeKatBrand;
