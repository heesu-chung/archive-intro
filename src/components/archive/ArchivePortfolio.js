import React from "react";
import ArchiveContainer from "./ArchiveContainer";

const title = "정보보호대학원 데이터 시각화 포트폴리오";

// '. ' means next line
const content =
    "2019. 겨울방학 기간, 정보보호대학원에서 진행하는 데이터 시각화 솔루션 디자인 파트 지원을 위해 작업한. 웹 애플리케이션 레이아웃 포트폴리오의 일부입니다";

const ArchivePortfolio = () => {
    return <ArchiveContainer title={title} content={content} />;
};

export default ArchivePortfolio;
