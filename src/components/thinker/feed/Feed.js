import React from "react";
import styled, { css } from "styled-components";

import clothing from "./assets/gif/clothing.gif";
import crosswalk from "./assets/gif/crosswalk.gif";
import elevator from "./assets/gif/elevator.gif";
import Monday from "./assets/gif/Monday.gif";
import pandoraBox from "./assets/gif/pandora-box.gif";
import success from "./assets/gif/success.gif";
import ladder from "./assets/gif/ladder.gif";
import Root from "./assets/gif/Root.gif";
const FeedWrapper = styled.div`
    width: 500px;
    height: 22rem;
    background: white;
    margin-right: 15px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    ${(props) =>
        props.dir === 1 &&
        css`
            transition: 0.5s all ease;

            transform: translateX(${-(props.loc - 2000) / 3}%);
        `}
    ${(props) =>
        props.dir === -1 &&
        css`
            transition: 0.5s all ease;

            transform: translateX(${(props.loc - 3300) / 3}%);
        `}

    @media (min-width: 800px) {
        width: 700px;
        display: flex;
        flex-direction: row;
        border-radius: 10px;
        ${(props) =>
            props.dir === 1 &&
            css`
                transition: 0.5s all ease;

                transform: translateX(${-(props.loc - 5600) / 7.5}%);
            `}
        ${(props) =>
            props.dir === -1 &&
            css`
                transition: 0.5s all ease;

                transform: translateX(${(props.loc - 6900) / 7.5}%);
            `}
    }
`;

const FeedImg = styled.img`
    width: 100%;
    @media (min-width: 800px) {
        width: 350px;

        border-radius: 10px;
    }
`;

const FeedArticle = styled.div`
    font-family: "Montserrat", sans-serif;
    font-size: 13px;
    padding-left: 10px;

    font-weight: ${(props) => props.op};
    ${(props) =>
        props.op === 300 &&
        css`
            margin-top: 12px;
            font-size: 11px;
            color: #aaa;
        `}

    @media(min-width: 800px) {
        font-size: 15px;
    }
`;

const Feed = ({ el, idx, loc, dir }) => {
    return (
        <FeedWrapper el={el} loc={loc} dir={dir}>
            {idx === 0 && (
                <>
                    <FeedImg src={clothing} />
                    <div style={{ padding: "5px" }}>
                        <FeedArticle>16th_Apr</FeedArticle>
                        <FeedArticle op={700}>Clothing</FeedArticle>
                        <FeedArticle op={300}>
                            벚꽃 질때 쯤 꽃샘추위가 또 찾아온다
                        </FeedArticle>
                    </div>
                </>
            )}
            {idx === 1 && (
                <>
                    <FeedImg src={crosswalk} />
                    <div style={{ padding: "5px" }}>
                        <FeedArticle>4th_Apr</FeedArticle>
                        <FeedArticle op={700}>Cross-walk</FeedArticle>
                        <FeedArticle op={300}>그린라이트의 함정</FeedArticle>
                    </div>
                </>
            )}
            {idx === 2 && (
                <>
                    <FeedImg src={elevator} />
                    <div style={{ padding: "5px" }}>
                        <FeedArticle>12th_Apr</FeedArticle>
                        <FeedArticle op={700}>Elevator</FeedArticle>
                        <FeedArticle op={300}>
                            느려도 확실한 게 있다
                        </FeedArticle>
                    </div>
                </>
            )}
            {idx === 3 && (
                <>
                    <FeedImg src={Root} />
                    <div style={{ padding: "5px" }}>
                        <FeedArticle>16th_Mar</FeedArticle>
                        <FeedArticle op={700}>Root</FeedArticle>
                        <FeedArticle op={300}>
                            뿌리, 마인드 바꾸기 힘든 이유
                        </FeedArticle>
                    </div>
                </>
            )}
            {idx === 4 && (
                <>
                    <FeedImg src={Monday} />
                    <div style={{ padding: "5px" }}>
                        <FeedArticle>1st_Apr</FeedArticle>
                        <FeedArticle op={700}>Monday</FeedArticle>
                        <FeedArticle op={300}>
                            문제를 못 피하는 게 문제
                        </FeedArticle>
                    </div>
                </>
            )}
            {idx === 5 && (
                <>
                    <FeedImg src={pandoraBox} />
                    <div style={{ padding: "5px" }}>
                        <FeedArticle>27th_Apr</FeedArticle>
                        <FeedArticle op={700}>Pandora Box</FeedArticle>
                        <FeedArticle op={300}>
                            판도라 상자 속 '희망'은 배가 덜 고팠다
                        </FeedArticle>
                    </div>
                </>
            )}
            {idx === 6 && (
                <>
                    <FeedImg src={success} />
                    <div style={{ padding: "5px" }}>
                        <FeedArticle>4th_Mar</FeedArticle>
                        <FeedArticle op={700}>Success</FeedArticle>
                        <FeedArticle op={300}>
                            이미 성공해있으니, 일단 받으시죠.
                        </FeedArticle>
                    </div>
                </>
            )}
            {idx === 7 && (
                <>
                    <FeedImg src={ladder} />{" "}
                    <div style={{ padding: "5px" }}>
                        <FeedArticle>27th_Mar</FeedArticle>
                        <FeedArticle op={700}>Ladder</FeedArticle>
                        <FeedArticle op={300}>
                            원래 목표를 하나 이루면 다음 목표로 가야됨
                        </FeedArticle>
                    </div>
                </>
            )}
        </FeedWrapper>
    );
};

export default Feed;
