import React from "react";
import { useRecoilValue } from "recoil";

import styled from "styled-components";
import { locState } from "../../App";
import Feed from "./feed/Feed";
import { BsInstagram } from "react-icons/bs";

const FeedWrapper = styled.div`
    width: 100%;
    height: 1200px;
    position: relative;
    /* border: 1px solid red; */
    margin-top: 3rem;
    overflow: hidden;

    @media (min-width: 800px) {
        margin-top: 400px;
    }
`;

const FeedContents = styled.div`
    margin-top: 30px;
    width: 290%;
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;

    @media (min-width: 800px) {
        width: 185%;
    }
`;

const FeedDesc = styled.p`
    padding: 30px 0;
    font-weight: 700;
    background: linear-gradient(to right, #f6c366, #d62e6e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: center;
    font-size: 24px;
`;

const imgArr1 = ["clothing", "crosswalk", "elevator", "Root", "plant"];

const imgArr2 = ["Monday", "pandoraBox", "success", "ladder", "thinking"];

const ThinkerFeed = () => {
    const loc = useRecoilValue(locState);

    return (
        <>
            <FeedWrapper>
                <FeedContents>
                    {[...imgArr1].map((el, idx) => (
                        <Feed el={el} key={idx} idx={idx} loc={loc} dir={1} />
                    ))}
                </FeedContents>
                <FeedDesc>
                    <a
                        href="https://www.instagram.com/dededef_lab/"
                        style={{ textDecoration: "none" }}
                    >
                        <BsInstagram
                            className="icon"
                            style={{
                                fontSize: "2rem",
                                color: "var(--point-color)",
                            }}
                        />
                    </a>
                    INSTAGRAM FEEDs
                </FeedDesc>
                <FeedContents>
                    {[...imgArr2].map((el, idx) => (
                        <Feed
                            el={el}
                            key={idx}
                            idx={idx + 5}
                            loc={loc}
                            dir={-1}
                        />
                    ))}
                </FeedContents>
            </FeedWrapper>
        </>
    );
};

export default ThinkerFeed;
