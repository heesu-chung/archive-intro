import React from "react";
import ArchiveContainer from "./ArchiveContainer";

const title = "웹/모바일 앱 레이아웃";

// '. ' means next line
const content =
    "2018. 고려대학교 디자인조형학부 졸업 프로젝트로 진행한 제품 서비스 디자인 강의 웹/모바일 앱 서비스 레이아웃입니다. 치매 요양병원을 현장 방문 및 인터뷰 한 내용을 토대로 요양사와 환자의 니즈 분석을 진행하였고,. 환자의 상태를 수시로 모니터링 함과 동시에 개개인별 치료, 투약 시기를 자동적으로 알리는 앱 시스템과. 관리 기록 및 데이터 시각화 자료를 보여주는 대시보드형 웹 레이아웃 디자인 작업을 진행하였습니다. 하단 작업물들은 고려대학교 정보보호대학원 데이터 시각화 솔루션 디자인 파트 지원 당시 포트폴리오로 제출했던 웹 레이아웃의 일부입니다";

const ArchiveGraduate = () => {
    return <ArchiveContainer title={title} content={content} />;
};

export default ArchiveGraduate;
