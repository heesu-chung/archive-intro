import React from "react";
import ArchiveContainer from "./ArchiveContainer";

const titleGL1 = "Graphic Programming";
const contentGL1 =
    "2019. 컴퓨터학과 / 컴퓨터 그래픽스 강의. C언어와 그래픽 라이브러리 Box2D를 활용해 제작한 간단한 인터렉티브 게임입니다. 맵 구현, 키보드에 따른 방향 이동과 충돌시 발생하는 물리적 작용, 반작용, 반동에 대한 물리값/Damping을 구현하고,. 중력 및 물의 물리적 속성을 구현하는 코드를 작성했습니다  ";

const titleGL2 = "OpenGL Programming_Wheel Simulation";
const contentGL2 =
    "2019. 컴퓨터학과 / 컴퓨터 그래픽스 강의. C언어와 OpenGL로 프로그래밍 구현한 자동차입니다. Vertex3f 키워드를 이용한 형태 구성과 JPEG 이미지를 텍스쳐로 매핑, 방향키에 따른 물체의 속도 조절 기능을 구현하였고,. 바퀴 회전수에 따른 물체의 위치변경을 구현하여 바퀴가 회전할 때 전진하는 것처럼 보이게 렌더링 되도록 구현하였습니다 ";

const titleGL3 = "OpenGL Programming_Cloth Collision Simulation";
const contentGL3 =
    "2019. 컴퓨터학과 / 인터렉티브 시각화 강의. C언어와 OpenGL로 프로그래밍 구현한 Cloth 시뮬레이션입니다. Cloth에서 힘이 적용될 부분들을 일정 간격으로 node로 설정하고, 재질적 특성을 표현하기 위해 상하좌우, 대각선 8방향으로 연결 후, 중력을 적용하였습니다. 각 node의 x, y, z 포지션을 배열의 형태로 버퍼에 담고, 상단 양쪽 끝 node가 고정된 상태에서. 각각의 node들에 작용하는 중력과 8방향 node들에서 작용하는 장력을 매 프레임마다 계산하였습니다. 장력이 적용된 node를 연결하는 선들은 일정 범위 길이까지 늘어날 수 있도록 설정했습니다. 바닥과의 충돌시점은 node의 y 포지션 값을 통해 얻어냈으며, 충돌 시 node의 중력에 의한 낙하 속도와 저항값을 통한 물리적 반작용을 구현했습니다. 이동하는 원형 구에 의한 충돌은 구의 중심 node 값과 Cloth node들의 거리를 구하고. node가 구의 내부 진입시 진행 방향 벡터값의 반대되는 값을 대입하였으며,. 프레임 최적화를 위해 구의 사정권에 들어간 node들에 대해서만 연산을 진행하는 분기를 두어 구현하였습니다";

const titleGL4 = "OpenGL Programming_Particle Collision Simulation";
const contentGL4 =
    "2019. 컴퓨터학과 / 인터렉티브 시각화 강의. C언어와 OpenGL로 프로그래밍 구현한 충돌 시뮬레이션입니다. 중간에 위치 한 Cloth와의 충돌은 Particle의 색상 변경을 통해 시각적으로 나타냈습니다. 특정 범위 내 버퍼에 Particle node들의 위치를 설정한 후, 특정 키보드 값이 입력될 때 시뮬레이션 환경에 중력이 작용되도록 하여,. 충돌이 일어난 node와 그렇지 않은 node의 차이를 비교하고자 했습니다. 4면이 고정되어 있는 Cloth mesh의 경우 중력이 적용될 때 고정되어 있지 않은 mesh node들은 밑으로 내려가게 되는데,. 이때 mesh의 한 면을 이루는 node 4개 위치의 중간값을 연산하여, Particle node의 x, z 값이 해당 mesh 한 면의 범위내 포함이 될 때,. y값을 사전에 연산한 mesh 면의 중간 값과 비교한 후 충돌 여부를 확인하고 진행 방향의 반대 방향으로 속도값을 변경하도록 구현했습니다.";

const titleGL5 = "OpenGL Programming_Particle Render";
const contentGL5 =
    "2019. 컴퓨터학과 / 인터렉티브 시각화 강의. C언어와 OpenGL로 Particle 렌더링을 시각적으로 표현하였습니다. 원형 구 내부에 랜덤 함수로 위치 입력된 5000개의 Particle 입자들이 운동성을 가지도록 구현 하였으며,. 내부에서 구와 충돌 시 빈대 방향으로 힘을 얻고 일정 시간 색이 변경됩니다. 구 외부에선 회전하는 위치 변수에서 일정 시간 간격으로 Particle node가 생성되며, 구의 중심 값과 생성된 node의 x, y, z 차이를 연산하여 이동합니다. 이동 중인 Particle 중 일부는 랜덤함수를 통해 일정 범위부터 궤도를 그리며, 궤도는 Particle의 위치값에 고정되어 있는 새 Particle을 생성하고,. 일정 시간이 지나면 버퍼에서 제거하는 형식으로 구현되었습니다";

export const ArchiveGL1 = () => {
    return <ArchiveContainer title={titleGL1} content={contentGL1} />;
};

export const ArchiveGL2 = () => {
    return <ArchiveContainer title={titleGL2} content={contentGL2} />;
};

export const ArchiveGL3 = () => {
    return <ArchiveContainer title={titleGL3} content={contentGL3} />;
};

export const ArchiveGL4 = () => {
    return <ArchiveContainer title={titleGL4} content={contentGL4} />;
};

export const ArchiveGL5 = () => {
    return <ArchiveContainer title={titleGL5} content={contentGL5} />;
};

export default ArchiveGL1;
