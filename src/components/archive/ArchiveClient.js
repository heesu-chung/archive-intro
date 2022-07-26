import React from "react";
import ArchiveContainer from "./ArchiveContainer";

const title = "클라이언트 외주";

// '. ' means next line
const content =
    "2018 - 2020. 클라이언트 요청을 받고 제작한 그래픽 작업들입니다. 포스터, 명함, 로고부터 캐릭터, 웹툰, 모션등의 외주를 받았으며, 클라이언트들과의 긴밀한 소통으로 그들이 만족하는 결과를 냈습니다. 클라이언트들의  니즈를 충족시키는 것을 목표로, 그들이 진정 원하는 것이 무엇인지 대화를 통해 구체화하는 작업들을 진행했습니다. 그들의 미적 취향과 생각, 무엇을 이루려고 하며 그들이 브랜드를 통해 소비자에게 전달하려는 가치는 무엇인지를 교류를 통해 알아가며,. 대화와 설득, 중간 시각화 과정을 통한 구체화와 생각의 공유로 제작자와 클라이언트 간의 간극을 좁히고, 서로 만족할 수 있는 결과물을 만들었습니다.";

const ArchiveClient = () => {
    return <ArchiveContainer title={title} content={content} />;
};

export default ArchiveClient;
