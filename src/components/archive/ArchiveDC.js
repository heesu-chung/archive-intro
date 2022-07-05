import React from "react";
import styled from "styled-components";
import DC from "./assets/DataChemistry.mp4";

import ArchiveContainer from "./ArchiveContainer";

const ArchiveVideo = styled.video`
    @media (min-width: 800px) {
        width: 50%;
        margin-left: 25%;
    }
`;

const title = "This is Title";

// '. ' means next line
const content = "Thie is Content. this is secondline. this is third line!";

const ArchiveDC = () => {
    return (
        <>
            <ArchiveVideo src={DC} controls preload="auto" />
            <ArchiveContainer title={title} content={content} />
        </>
    );
};

export default ArchiveDC;
