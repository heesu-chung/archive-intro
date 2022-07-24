import React from "react";
import ArchiveContainer from "./ArchiveContainer";

const title = "Kuvshinov Ilya 작가 Illust 모작";
const content =
    "2022. Instagram, Patreon 일러스트 작가 활동을 계획하고 진행했던 작업물입니다. 새로운 트렌드는 기존 트렌드의 부족했던 부분이 보완된 발전 형태이거나,. 또는 기존 트렌드의 핵심이 되는 특정 개념의 클리셰 파괴에서 이루어집니다. 모작을 통해 트렌드에 부합하는 인체 비례와 각도, 색감과 붓 터치를 익히고. 이후 차별화 된 인체 비율과 그림체를 만들어내기 위한 선행 작업으로,. Instagram, Patreon에서 활동하는 유명 작가 Kuvshinov Ilya의 부분사실적인 일러스트를 모작하였습니다";

const ArchiveArt = () => {
    return <ArchiveContainer title={title} content={content} />;
};

export default ArchiveArt;
