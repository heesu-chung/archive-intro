import React from "react";
import styled from "styled-components";
import ThinkerAbout from "../components/thinker/ThinkerAbout";
import ThinkerConcept from "../components/thinker/ThinkerConcept";
import ThinkerImage from "../components/thinker/ThinkerImage";
import ThinkerTitle from "../components/thinker/ThinkerTitle";
import ThinkerFeed from "../components/thinker/ThinkerFeed";
import ThinkerModel from "../components/thinker/ThinkerModel";
import ThinkerReel from "../components/thinker/ThinkerReel";

const ThinkerWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

const Thinker = () => {
    return (
        <ThinkerWrapper>
            <ThinkerTitle />
            <ThinkerImage />
            <ThinkerConcept />
            <ThinkerAbout />
            <ThinkerFeed />
            <ThinkerModel />
            <ThinkerReel />
        </ThinkerWrapper>
    );
};

export default Thinker;
