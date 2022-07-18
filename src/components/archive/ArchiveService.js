import React from "react";
import ArchiveContainer from "./ArchiveContainer";

const title = "모바일 서비스 디자인 프로세스";
const content =
    "2020. 컴퓨터학과 / 창의적 소프트웨어 창업 방법론. 서비스 프로젝트를 위한 스테이크 홀더 인터뷰와 사용자 환경, 니즈 분석,. 이를 토대로 진행한 프로토타입 실험과 프로토타입 사용자 인터뷰 분석 프로세스 및 최종 발표 자료 일부입니다. 프론트엔드/인터렉티브 개발과 UI/UX 디자인은 궁극적으로 이를 사용할 사용자 우선이 되어야 하며,. 그들이 사용하게 될 서비스는 기본적으로 사용자에게 익숙한 환경과 플로우, 인터페이스로 구성 되어야 합니다. 웹 페이지 방문시 접하게 되는 레이아웃, 인터페이스와 콘텐츠는 사용자들의 경험을 해치지 않아야 하고. 안정적인 서비스 퍼포먼스 및 좋은 디자인은 전달하고자 하는 브랜드와 메시지를 더욱 뚜렷하게 전달할 수 있습니다.  ";

const ArchiveService = () => {
    return <ArchiveContainer title={title} content={content} />;
};

export default ArchiveService;
