import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

// components
import ThinkerAbout from "../components/thinker/ThinkerAbout";
import ThinkerConcept from "../components/thinker/ThinkerConcept";
import ThinkerImage from "../components/thinker/ThinkerImage";
import ThinkerTitle from "../components/thinker/ThinkerTitle";
import ThinkerFeed from "../components/thinker/ThinkerFeed";
import ThinkerModel from "../components/thinker/ThinkerModel";
import ThinkerReel from "../components/thinker/ThinkerReel";
import ThinkerMore from "../components/thinker/ThinkerMore";
import { useRecoilValue } from "recoil";
import { locState } from "../App";

const ThinkerWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    ${(props) =>
        props.loc > 3600 && props.loc < 5400
            ? css`
                  transition: 1s all ease;
                  background: black;
              `
            : css`
                  transition: 1s all ease;
                  background: #fafafa;
              `}

    @media (min-width: 700px) {
        ${(props) =>
            props.loc > 7000
                ? css`
                      transition: 2s all ease;
                      background: black;
                      /* padding-bottom: 100px; */
                  `
                : css`
                      transition: 2s all ease;
                      background: #fafafa;
                  `}
    }
`;

const Thinker = () => {
    const loc = useRecoilValue(locState);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
        >
            <ThinkerWrapper loc={loc}>
                <ThinkerTitle />
                <ThinkerImage />
                <ThinkerConcept />
                <ThinkerAbout />
                <ThinkerFeed />
                <ThinkerModel />
                <ThinkerReel />
                <ThinkerMore />
            </ThinkerWrapper>
        </motion.div>
    );
};

export default Thinker;
