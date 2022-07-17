import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { locState } from "../../App";

import { Desc } from "./KodeKatOverview";
import TextFn from "./text/TextFn";

import Crew1 from "./assets/Product_04.jpg";
import Crew2 from "./assets/3D_07.png";
import Crew3 from "./assets/3D_10.png";
import Crew4 from "./assets/Product_12.jpg";
import Crew5 from "./assets/Product13.jpg";

const CrewWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    @media (min-width: 800px) {
        display: flex;
        flex-direction: row;
    }
`;

const CrewImgContainer = styled.div`
    flex: 1;
    margin-top: -100px;

    /* @media (min-width: 800px) {
        margin-top: 0px;
    } */

    div {
        position: relative;
        opacity: 1;
        img {
            width: 100px;
            height: 100px;
        }
        .img1 {
            width: 500px;
            height: 100%;
            object-fit: cover;
        }
        .img2 {
            width: 200px;
            height: 200px;
            object-fit: cover;
            margin-top: -120px;
        }
        .img3 {
            width: 300px;
            height: 200px;
            margin-top: -50px;
            margin-left: 100px;
            object-fit: cover;
        }
        .img4 {
            width: 300px;
            object-fit: cover;
            margin-left: 50%;
            transform: translateX(-50%);
            margin-top: -20px;
        }
        .img5 {
            width: 200px;
            object-fit: cover;
        }

        @media (min-width: 800px) {
            .img2 {
                width: 300px;
                margin-left: 50%;
            }
            .img3 {
                width: 400px;
                margin-left: 50px;
            }
            .img4 {
                margin-left: 65%;
                width: 400px;
            }
            .img5 {
                width: 100%;
                height: 200px;
            }
        }
    }
`;

const textArr = [
    "Kode Kat Crew은 협업하는 캐릭터입니다",
    "각자의 개성들을 가진 이들이 모여",
    "팀을 이뤄 함께 목표를 이루고 가치를 만들어가며",
    "혼자서는 불가능했던 것들을 이뤄나가는",
    "우리들의 모습을 대변합니다",
];

const KodeKatCrew = () => {
    const loc = useRecoilValue(locState);

    return (
        <CrewWrapper>
            <Desc op={1}>
                <div className="text-container">
                    <p className="category">Diversity & Harmony</p>
                    <p className="title">Kode Kat Crew</p>
                    {[...textArr].map((el, idx) => (
                        <TextFn key={idx} el={el} idx={idx} op={"small"} />
                    ))}
                </div>
            </Desc>
            <CrewImgContainer loc={loc}>
                <div className="img">
                    <img src={Crew1} alt="" className="img1" />
                </div>
                <div className="img">
                    <img src={Crew2} alt="" className="img2" />
                </div>
                <div className="img">
                    <img src={Crew3} alt="" className="img3" />
                </div>
                <div className="img">
                    <img src={Crew4} alt="" className="img4" />
                </div>
                <div className="img">
                    <img src={Crew5} alt="" className="img5" />
                </div>
            </CrewImgContainer>
        </CrewWrapper>
    );
};

export default KodeKatCrew;
