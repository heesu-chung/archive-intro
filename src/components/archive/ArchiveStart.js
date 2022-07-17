import React from "react";

import ArchiveContainer from "./ArchiveContainer";

const title = "Zero to Infinity";

// '. ' means next line
const content =
    "KODE KAT 2019 - 2021. 모든 일에는 시작이 있고, 발전에는 끝이 없습니다. 캐릭터 디자인 및 콘텐츠 기획 & 제작은 작은 낙서로부터 시작되었습니다. 이모티콘 상품 출시를 위해 처음 그려졌던 메모장 속 작은 낙서가. 알맞은 형태를 갖추고, 고유한 아이덴티티와 차별성을 가지게 되면서 상품성을 갖추게 되었습니다. 그 과정에서 플랫폼 채널 또한 이모티콘 작업에서 캐릭터 IP를 활용한. 대학교 교내 커뮤니티 내 웹툰 연재, SNS 일러스트 채널로,. 더 나아가 마플샵 패션/잡화 상품과, 아트토이 영역으로 확장시켰습니다. 2D 작업은 Illustrator와 Photoshop. 3D 작업은 Rhino, Keyshot, Blender로 진행하였습니다";

const ArchiveStart = () => {
    return <ArchiveContainer title={title} content={content} />;
};

export default ArchiveStart;
