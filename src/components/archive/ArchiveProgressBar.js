import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { locState } from "../../App";

const ProgressBarWrapper = styled.div`
    @media (max-width: 800px) {
        display: none;
    }
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 8px;
    background: white;
    opacity: 0.7;
`;

const ProgressStatus = styled.div`
    position: fixed;
    z-index: 10;
    top: 0px;
    left: 0px;
    background: var(--point-color);
    height: 8px;
    border-bottom: 1px solid #aaa;

    width: ${(props) => props.loc / 127}%;
`;

const ArchiveProgressBar = () => {
    const loc = useRecoilValue(locState);
    return (
        <ProgressBarWrapper>
            <ProgressStatus loc={loc} />
        </ProgressBarWrapper>
    );
};

export default ArchiveProgressBar;
