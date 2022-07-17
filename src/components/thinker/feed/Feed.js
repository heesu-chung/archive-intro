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
import plant from "./assets/gif/plant.gif";
import thinking from "./assets/gif/thinking.gif";

const FeedWrapper = styled.div`
    width: 500px;
    height: 22rem;
    background: white;
    margin-right: 15px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    ${(props) =>
        props.dir === 1 &&
        css`
            transition: 0.7s all ease;

            ${(props) =>
                props.loc > 1500 &&
                props.loc < 3700 &&
                css`
                    transform: translateX(${-(props.loc - 1800) / 3.5}%);
                `}
        `}
    ${(props) =>
        props.dir === -1 &&
        css`
            transition: 0.7s all ease;

            ${(props) =>
                props.loc > 1500 &&
                props.loc < 3700 &&
                css`
                    transform: translateX(${(props.loc - 3600) / 3.5}%);
                `}
        `}

    @media (min-width: 800px) {
        width: 700px;
        display: flex;
        flex-direction: row;
        border-radius: 10px;
        ${(props) =>
            props.dir === 1 &&
            props.loc > 5400 &&
            props.loc < 7600 &&
            css`
                transition: 0.7s all ease;

                transform: translateX(${-(props.loc - 5600) / 7.5}%);
            `}
        ${(props) =>
            props.dir === -1 &&
            props.loc > 5400 &&
            props.loc < 7600 &&
            css`
                transition: 0.7s all ease;

                transform: translateX(${(props.loc - 7600) / 7.5}%);
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
        ${(props) =>
            props.op === 700 &&
            css`
                margin-top: 5px;
                font-size: 16px;
                color: black;
            `}
        ${(props) =>
            props.op === 300 &&
            css`
                margin-top: 25px;
                font-size: 11px;
                color: #aaa;
            `}
        ${(props) =>
            props.op === 400 &&
            css`
                margin-top: 25px;
                font-size: 11px;
                color: #aaa;
            `}
    }
`;

const Feed = ({ el, idx, loc, dir }) => {
    return (
        <FeedWrapper el={el} loc={loc} dir={dir}>
            {idx === 0 && (
                <>
                    <FeedImg src={clothing} />
                    <div style={{ padding: "5px" }}>
                        <FeedArticle op={400}>16th_Apr</FeedArticle>
                        <FeedArticle op={700}>Sakura Wind</FeedArticle>
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
                        <FeedArticle op={400}>4th_Apr</FeedArticle>
                        <FeedArticle op={700}>Cross-walk Pitfall</FeedArticle>
                        <FeedArticle op={300}>그린라이트의 함정</FeedArticle>
                    </div>
                </>
            )}
            {idx === 2 && (
                <>
                    <FeedImg src={elevator} />
                    <div style={{ padding: "5px" }}>
                        <FeedArticle op={400}>12th_Apr</FeedArticle>
                        <FeedArticle op={700}>Use Stairway Plz</FeedArticle>
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
                        <FeedArticle op={400}>16th_Mar</FeedArticle>
                        <FeedArticle op={700}>Inertia</FeedArticle>
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
                        <FeedArticle op={400}>1st_Apr</FeedArticle>
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
                        <FeedArticle op={400}>27th_Apr</FeedArticle>
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
                        <FeedArticle op={400}>4th_Mar</FeedArticle>
                        <FeedArticle op={700}>Your Success</FeedArticle>
                        <FeedArticle op={300}>
                            이미 성공해있으니, 일단 받으시죠.
                        </FeedArticle>
                    </div>
                </>
            )}
            {idx === 7 && (
                <>
                    <FeedImg src={ladder} />
                    <div style={{ padding: "5px" }}>
                        <FeedArticle op={400}>27th_Mar</FeedArticle>
                        <FeedArticle op={700}>Next Ladder</FeedArticle>
                        <FeedArticle op={300}>
                            원래 목표를 하나 이루면 다음 목표로 가야됨
                        </FeedArticle>
                    </div>
                </>
            )}
            {idx === 8 && (
                <>
                    <FeedImg src={thinking} />
                    <div style={{ padding: "5px" }}>
                        <FeedArticle op={400}>3rd_Feb</FeedArticle>
                        <FeedArticle op={700}>Shape of Thoughts</FeedArticle>
                        <FeedArticle op={300}>생각의 모양</FeedArticle>
                    </div>
                </>
            )}
            {idx === 9 && (
                <>
                    <FeedImg src={plant} />{" "}
                    <div style={{ padding: "5px" }}>
                        <FeedArticle op={400}>16th_Mar</FeedArticle>
                        <FeedArticle op={700}>Memo Plant</FeedArticle>
                        <FeedArticle op={300}>
                            아이디어 나오면 바로 메모하는 습관
                        </FeedArticle>
                    </div>
                </>
            )}
        </FeedWrapper>
    );
};

export default Feed;
