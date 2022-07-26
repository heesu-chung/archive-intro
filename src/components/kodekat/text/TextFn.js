import React from "react";
import { useRecoilValue } from "recoil";
import styled, { css } from "styled-components";
import { locState } from "../../../App";

const TextStyled = styled.p`
    font-family: "Noto Sans KR", sans-serif;
    ${(props) =>
        props.op === "white" &&
        css`
            color: white;
            font-size: 14px;
            font-weight: 300;
            margin: 5px 0;
            opacity: 0;
            transition: 0.5s all ease;
            ${(props) =>
                props.loc > 130 &&
                css`
                    opacity: 1;
                `}
            @media (min-width: 800px) {
                font-size: 50px;
                font-weight: 500;
                margin: 10px 0;
                opacity: 1;
            }
        `}

    ${(props) =>
        props.op === "small" &&
        css`
            color: #999;
            font-size: 13px;
            font-weight: 300;
            margin-left: 20px;

            @media (min-width: 800px) {
                width: 100%;
                left: 0%;
                font-size: 17px;
                text-align: left;
                margin: 5px 20px;
            }
            ${(props) =>
                props.el === "" &&
                css`
                    margin: 10px 0;
                `}
        `}
`;

const TextFn = ({ idx, el, op }) => {
    const loc = useRecoilValue(locState);

    return (
        <TextStyled loc={loc} idx={idx} op={op} el={el}>
            {el}
        </TextStyled>
    );
};

export default TextFn;
