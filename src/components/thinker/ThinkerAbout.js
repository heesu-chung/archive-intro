import React from "react";
import { useRecoilValue } from "recoil";
import styled, { css } from "styled-components";
import { locState } from "../../App";
import face from "../../assets/face.jpg";
import plant from "../../assets/plant.gif";

const AboutWrapper = styled.div`
    /* border: 1px solid black; */
    width: 100%;
    height: 1000px;
    z-index: 3;
    margin-top: -600px;

    @media (min-width: 800px) {
        margin-top: -800px;
    }
`;

const FaceImg = styled.img`
    width: 50%;
    border-radius: 50%;
    display: flex;
    margin-bottom: 50px;

    @media (min-width: 800px) {
        width: 15%;
    }
`;

const AboutText = styled.p`
    font-family: "Yeon Sung", cursive;
    font-size: 16px;
    padding-left: 10px;
    font-weight: 500;
    text-align: center;
    letter-spacing: 2px;
    margin-top: 5px;
    opacity: 0;

    filter: blur(6px);
    ${(props) =>
        props.loc > 1200 + props.idx * 30 &&
        css`
            transition: 0.5s all ease;
            opacity: 1;
            filter: blur(0px);
            transform: translatey(-15px);
        `}

    ${(props) =>
        props.loc <= 1200 + props.idx * 30 &&
        css`
            transition: 0.5s all ease;
            opacity: 0;
            filter: blur(6px);
            transform: translatey(15px);
        `}

    ${(props) =>
        props.el === " " &&
        css`
            margin-top: 30px;
            @media (min-width: 800px) {
                margin-top: 50px;
            }
        `}

    @media (min-width: 800px) {
        font-size: 20px;
        font-weight: 500;

        ${(props) =>
            props.loc > 4800 + props.idx * 30 &&
            css`
                transition: 0.5s all ease;
                opacity: 1;
                filter: blur(0px);
                transform: translatey(-15px);
            `}

        ${(props) =>
            props.loc <= 4800 + props.idx * 30 &&
            css`
                transition: 0.5s all ease;
                opacity: 0;
                filter: blur(6px);
                transform: translatey(15px);
            `}
    }
`;

const ThinkerAbout = () => {
    const loc = useRecoilValue(locState);

    const aboutText = [
        `우리는 항상 스스로에게 생각할 거리를 던지고,`,
        `그 생각은 꼬리에 꼬리를 물어서,`,
        `마침내, 어떤 생각에 다다릅니다`,
        " ",
        `자신에겐 당연했던 그 생각의 꼬리들이`,
        `타인과 다른 것은 우리가 누구인지를 말해주고`,
        " ",
        `누군가가 그것을 함께 공감해준다는 건`,
        `우리도 어딘가 속해있단 것을,`,
        " ",
        `생각을 나눌 수 있다는 것은`,
        `우리에게 또 다른 생각거리를 던져`,
        `보다 더 성장할 수 있는 발판이 되어줍니다`,
        " ",
        `생각의 모양은`,
        `그런 우리의 모습을 표현하고자 합니다`,
    ];

    return (
        <AboutWrapper>
            <FaceImg src={face} />
            {[...aboutText].map((el, idx) => (
                <AboutText key={idx} idx={idx} el={el} loc={loc}>
                    {el}
                </AboutText>
            ))}
            <FaceImg src={plant} style={{ marginTop: "50px" }} />
        </AboutWrapper>
    );
};

export default ThinkerAbout;
