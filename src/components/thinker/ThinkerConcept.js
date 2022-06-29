import React from "react";
import styled from "styled-components";

const ConceptWrapper = styled.div`
    width: 100%;
    height: 5000px;
    border: 1px solid black;
    position: relative;
`;

const ConceptCover = styled.div``;

const ThinkerConcept = () => {
    return (
        <ConceptWrapper>
            <ConceptCover />
        </ConceptWrapper>
    );
};

export default ThinkerConcept;
