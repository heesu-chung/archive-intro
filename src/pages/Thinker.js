import React from "react";
import styled from "styled-components";
import ThinkerConcept from "../components/thinker/ThinkerConcept";
import ThinkerTitle from "../components/thinker/ThinkerTitle";

const ThinkerWrapper = styled.div`
    width: 100%;
`;

const Thinker = () => {
    return (
        <ThinkerWrapper>
            <ThinkerTitle />
            <ThinkerConcept />
        </ThinkerWrapper>
    );
};

export default Thinker;
