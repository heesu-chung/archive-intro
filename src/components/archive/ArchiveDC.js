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

const title = "Data Chemistry";

// '. ' means next line
const content =
    "2017. 기초조형 2D 강의. 4차 산업혁명과 함께 이슈가 되었던 빅데이터, 인공지능과 관련지어. 정보의 생성, 선별 및 새로운 데이터 학습 과정,. 자가 복제와 생산성 향상, 최종적으로 프로그램 자체로 자율성을 얻는다는 서사적 메시지를 영상화하여 표현했습니다. 가로, 높이 1M 원판 속 남성 얼굴을 그린 설치물에 해당 영상을 프로젝트로 투사한 미디어 아트 설치작품입니다. 음악 편집 - 생상스 / 죽음의 무도";

const ArchiveDC = () => {
    return (
        <>
            <ArchiveVideo src={DC} controls preload="auto" />
            <ArchiveContainer title={title} content={content} />
        </>
    );
};

export default ArchiveDC;
